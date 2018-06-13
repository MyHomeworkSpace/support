---
layout: docs
title: All Articles
icon: far fa-envelope
author: MyHomeworkSpace Team
description: Get started with MyHomeworkSpace
---

{% for page in site.pages %}
  <h2><a href="{{ page.url }}">{{ page.title }}</a></h2>
  <p>{{ page.description }}</p>
{% endfor %}