---
layout: docs
title: All Articles
icon: fas fa-list-ul
contributors: ["nywillb", "thatoddmailbox"]
description: A list of all help articles.
special-edit-url: https://github.com/MyHomeworkSpace/support/edit/master/docs/index.md
---

{% for page in site.pages %}
  <h2><a href="{{ page.url }}">{% if page.icon %}<i class="fa-fw {{ page.icon }}"></i> {% endif %}{{ page.title }}</a></h2>
  <p>{{ page.description }}</p>
{% endfor %}