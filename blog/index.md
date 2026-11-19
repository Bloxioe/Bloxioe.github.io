---
layout: default
title: Blog
description: Essays, tutorials, and engineering deep-dives from Abdul Mueed — the developer behind PluginStream, CodeBin and AI-Base.
keywords: Abdul Mueed blog, Abdul Mueed projects, PluginStream, CodeBin, AI-Base, kotlin android development, next.js tutorial, open source android app, indie developer blog
permalink: /blog/
redirect_from:
  - /news/
---

<section class="page-hero container">
    <div class="page-hero__inner">
        <p class="section-header__overline">Blog</p>
        <h1 class="page-hero__title">Notes from the build</h1>
        <p class="page-hero__subtitle">Essays, tutorials, and engineering deep-dives from Abdul Mueed — the developer behind PluginStream, CodeBin and AI-Base.</p>
    </div>
</section>

<section class="news-list container">
    <div class="blog-newsletter">
        {% include newsletter.html id="blog-hero" title="Get the next post" no_subtitle=true %}
    </div>

    <ul class="news-list__items">
        {% assign posts = site.news | sort: "date" | reverse %}
        {% for post in posts %}
        <li class="news-list__item">
            <time datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%B %-d, %Y" }}
            </time>
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
        </li>
        {% endfor %}
    </ul>
</section>
