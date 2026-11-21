---
layout: default
title: Technology Blog
description: Technology news, software development tutorials, open-source project notes, and independent commentary by Bloxioe.
image: https://bloxioe.github.io/blog/og-image.jpg
image_alt: Bloxioe blog — notes on technology, minimal software, local-first apps, and open source.
keywords: Bloxioe technology blog, tech news, software development, open source, Android, web development, programming tutorials
permalink: /blog/
redirect_from:
  - /news/
---

{% assign posts = site.news | where_exp: "post", "post.draft != true" | sort: "date" | reverse %}
{% capture cat_str %}{% for post in posts %}{% for cat in post.categories %}{{ cat }}|{% endfor %}{% endfor %}{% endcapture %}
{% assign all_cats = cat_str | split: "|" | uniq | sort %}

<section class="page-hero container">
    <div class="page-hero__inner">
        <p class="section-header__overline">Blog</p>
        <h1 class="page-hero__title">Notes from the build</h1>
        <p class="page-hero__subtitle">Technology news, software development tutorials, open-source project notes, and independent commentary by Bloxioe.</p>
    </div>
</section>

<section class="news-list container">
    {% include ad_slot.html slot="blog_top" %}
    <div class="blog-newsletter">
        {% include newsletter.html id="blog-hero" title="Get the next post" no_subtitle=true %}
    </div>

    {% if all_cats.size > 0 %}
    <nav class="cat-filter" aria-label="Filter posts by category">
        <button type="button" class="cat-filter__chip is-active" data-category="all">All posts</button>
        {% for cat in all_cats %}
        <button type="button" class="cat-filter__chip" data-category="{{ cat | slugify }}">{{ cat }}</button>
        {% endfor %}
    </nav>
    {% endif %}

    <ul class="news-list__items news-list__items--blog" id="postList">
        {% for post in posts %}
        <li class="news-list__item" data-categories="{% for cat in post.categories %}{{ cat | slugify }} {% endfor %}">
            {%- assign thumb = post.image | default: "" | strip -%}
            {% if thumb != "" %}
            <a class="news-list__thumb" href="{{ post.url }}" tabindex="-1" aria-hidden="true">
                <img src="{{ thumb }}" alt="" loading="lazy" decoding="async">
            </a>
            {% endif %}
            <div class="news-list__main">
                <p class="news-list__meta">
                    <time datetime="{{ post.date | date_to_xmlschema }}">
                        {{ post.date | date: "%B %-d, %Y" }}
                    </time>
                    {% for cat in post.categories %}
                    <a class="news-list__cat" href="/blog/?category={{ cat | slugify }}">{{ cat }}</a>
                    {% endfor %}
                </p>
                <a href="{{ post.url }}" class="news-list__title">{{ post.title }}</a>
                {% if post.description %}
                    <p class="news-list__excerpt">{{ post.description }}</p>
                {% endif %}
                {% if post.tags %}
                <p class="news-list__tags">
                    {% for tag in post.tags %}
                    <span class="news-list__tag">{{ tag }}</span>
                    {% endfor %}
                </p>
                {% endif %}
            </div>
        </li>
        {% endfor %}
    </ul>
    <p class="news-list__empty" id="postEmpty" hidden>No posts in this category yet.</p>
    {% include ad_slot.html slot="blog_bottom" %}
</section>

<script>
(() => {
    const chips = Array.from(document.querySelectorAll('.cat-filter__chip'));
    const items = Array.from(document.querySelectorAll('#postList .news-list__item'));
    const empty = document.getElementById('postEmpty');
    if (!chips.length || !items.length) return;

    function apply(cat) {
        let shown = 0;
        items.forEach(el => {
            const cats = (el.dataset.categories || '').trim().split(/\s+/).filter(Boolean);
            const match = cat === 'all' || cats.includes(cat);
            el.hidden = !match;
            if (match) shown++;
        });
        chips.forEach(c => c.classList.toggle('is-active', c.dataset.category === cat));
        if (empty) empty.hidden = shown > 0;
    }

    chips.forEach(chip => chip.addEventListener('click', () => {
        const cat = chip.dataset.category;
        apply(cat);
        const url = cat === 'all' ? location.pathname : location.pathname + '?category=' + cat;
        history.replaceState(null, '', url);
    }));

    const initial = new URLSearchParams(location.search).get('category');
    apply(initial && chips.some(c => c.dataset.category === initial) ? initial : 'all');
})();
</script>
