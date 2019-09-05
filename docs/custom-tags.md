---
layout: docs
title: About Custom Tags
icon: fas fa-tag
contributors: ["nywillb"]
description: Learn about custom tags, and how to use them.
---

MyHomeworkSpace supports custom tags, or assignment types. By default, are custom tags are <span class="tag" style="background-color: #ffd3bd">pink</span>.

## How to use custom tags
You can use custom tags with Quick Add, or with the default add homework dialog.

### Add a custom tag with Quick Add
1. Open Quick Add by clicking <button class="btn btn-sm btn-light"><i class="fa fa-plus-square"></i> Add homework</button>.
2. Type your homework as with your custom tag as you normally would, for example **Game vs. Trinity in other on Friday**.

The sample above would be parsed as:
{% include assignment.html title='<span class="tag" style="background-color: #ffd3bd">Game</span> vs. Trinity' subject='other' due='Friday' done='false' %}

### Add a custom tag without Quick Add
1. Click <button class="btn btn-sm btn-light"><i class="fa fa-plus-square"></i> Add homework</button>. If Quick Add opens, press enter or return to bypass it.
2. Type your custom tag, followed by the remainder of your assignment title into the name box.

### Change the color of a custom tag
1. Click <button class="btn btn-sm btn-light"><i class="fa fa-chevron-circle-down"></i></button> in the upper left hand corner of the screen (to the right of  <button class="btn btn-sm btn-light"><i class="fa fa-calendar"></i> Calendar</button>).
2. Click <button class="btn btn-sm btn-light"><i class="fa fa-cogs"></i> Settings</button>. The settings page will open.
3. Click <span class="text-primary">Homework</span>
4. Scroll down to the "Add Custom Tag" section.
5. Select a color from the dropdown, and type the name of your tag into the box to the right of the dropdown. If you want to add multiple tags of the same color, you can seperate them with spaces.
6. Click <button class="btn btn-sm btn-light">Add</button>. To see your changes, reload the page using the "reload" button in your browser. It usually looks like this: <i class="fas fa-redo"></i>, though it can vary from browser to browser.