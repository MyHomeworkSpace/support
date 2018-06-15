---
layout: docs
title: About Custom Tags
icon: fas fa-tag
author: William Barkoff
description: Learn about custom tags, and how to use them.
---

MyHomeworkSpace supports custom tags, or assignment types. While we hope to allow you to chose your own color for tags in the future, currently, all custom tags are currently <span class="tag" style="background-color: #ffd3bd">pink</span>.

## How to use custom tags
You can use custom tags with Quick Add, or with the default add homework dialog.

### Add a custom tag with Quick Add
1. Open Quick Add by clicking <button class="btn btn-sm btn-light"><i class="fa fa-plus-square"></i> Add homework</button>.
2. Type your homework as with your custom tag as you normally would, for example **Game vs. Trinity in other on Friday**.

The sample above would be parsed as:
{% include assignment.html title='<span class="tag" style="background-color: #ffd3bd">Game</span> vs. Trinity' subject='other' due='Friday' done='false' %}

### Add a custom tag with Quick Add
1. Click <button class="btn btn-sm btn-light"><i class="fa fa-plus-square"></i> Add homework</button>. If Quick Add opens, press enter or return to bypass it.
2. Type your custom tag, followed by the remainder of your assignment title into the name box.