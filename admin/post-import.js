(function (global) {
  'use strict';

  var allowedFields = [
    'title',
    'slug',
    'image',
    'image_alt',
    'description',
    'date',
    'categories',
    'tags',
    'redirect_from',
    'draft',
  ];
  var arrayFields = ['categories', 'tags', 'redirect_from'];
  var stringFields = ['title', 'slug', 'image', 'image_alt', 'description'];

  function fail(message) {
    throw new Error('Markdown import: ' + message);
  }

  function normalizeDate(value) {
    if (value instanceof Date && !Number.isNaN(value.getTime())) {
      return value.toISOString().slice(0, 10);
    }

    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      var parsed = new Date(value + 'T00:00:00.000Z');
      if (!Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value) {
        return value;
      }
    }

    fail('date must use YYYY-MM-DD.');
  }

  function parseSource(source) {
    var lines = source.replace(/^\uFEFF/, '').split(/\r?\n/);
    var opening = lines.findIndex(function (line) {
      return /^[ \t]*---[ \t]*$/.test(line);
    });
    var closing = -1;

    if (opening !== -1) {
      for (var index = opening + 1; index < lines.length; index += 1) {
        if (/^[ \t]*---[ \t]*$/.test(lines[index])) {
          closing = index;
          break;
        }
      }
    }

    if (opening === -1 || closing === -1) {
      fail('include YAML front matter between opening and closing --- lines.');
    }

    if (!global.jsyaml || typeof global.jsyaml.load !== 'function') {
      fail('the YAML parser did not load. Refresh the CMS and try again.');
    }

    var frontmatter;
    try {
      frontmatter = global.jsyaml.load(lines.slice(opening + 1, closing).join('\n'));
    } catch (error) {
      fail('invalid YAML front matter: ' + error.message);
    }

    if (!frontmatter || typeof frontmatter !== 'object' || Array.isArray(frontmatter)) {
      fail('front matter must be a YAML object.');
    }

    var unknownFields = Object.keys(frontmatter).filter(function (field) {
      return allowedFields.indexOf(field) === -1;
    });
    if (unknownFields.length) {
      fail('unsupported front matter field(s): ' + unknownFields.join(', ') + '.');
    }

    if (typeof frontmatter.title !== 'string' || !frontmatter.title.trim()) {
      fail('add a non-empty title.');
    }

    if (!Object.prototype.hasOwnProperty.call(frontmatter, 'date')) {
      fail('add a date in YYYY-MM-DD format.');
    }

    frontmatter.date = normalizeDate(frontmatter.date);

    stringFields.forEach(function (field) {
      if (
        Object.prototype.hasOwnProperty.call(frontmatter, field) &&
        typeof frontmatter[field] !== 'string'
      ) {
        fail(field + ' must be text.');
      }
    });

    arrayFields.forEach(function (field) {
      if (!Object.prototype.hasOwnProperty.call(frontmatter, field)) {
        return;
      }
      if (
        !Array.isArray(frontmatter[field]) ||
        frontmatter[field].some(function (value) {
          return typeof value !== 'string';
        })
      ) {
        fail(field + ' must be a YAML list of text values.');
      }
    });

    if (
      Object.prototype.hasOwnProperty.call(frontmatter, 'draft') &&
      typeof frontmatter.draft !== 'boolean'
    ) {
      fail('draft must be true or false.');
    }

    return {
      fields: frontmatter,
      body: lines.slice(closing + 1).join('\n').replace(/^\n/, ''),
    };
  }

  global.CMS.registerEventListener({
    name: 'preSave',
    handler: function (_ref) {
      var entry = _ref.entry;
      if (!entry || entry.get('collection') !== 'news') {
        return;
      }

      var data = entry.get('data');
      var source = data.get('source');
      if (typeof source === 'string' && source.trim()) {
        var parsed = parseSource(source);
        var importedData = Object.assign({}, parsed.fields, {
          body: parsed.body,
        });

        return entry.set('data', data.clear().merge(importedData));
      }

      if (
        typeof data.get('title') !== 'string' ||
        !data.get('title').trim() ||
        !data.get('date')
      ) {
        fail('add a title and date, or paste a complete Markdown file above.');
      }
    },
  });
})(window);
