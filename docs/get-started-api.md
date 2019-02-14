---
layout: docs
title: Getting Started with the MyHomeworkSpace Public API
icon: fas fa-code
author: William Barkoff
description: Learn how to use the MyHomeworkSpace API
mermaid: true
---

The MyHomeworkSpace public API provides a method of programmatically accessing a user's account over the internet.

## Requesting API Access

API Access is not yet automated. To get a Client ID, you can reach out to us by emailing [hello@myhomework.space](mailto:hello@myhomework.space), or using the feedback buttons in MyHomeworkSpace. In your request, make sure to include a valid origin (for CSRF purposes), as well as a valid callback url.

If you need to make any changes to this information, feel free to reach out to us.

If you just want to try out the API, without building a specific application, you can use the "Try it out" sections of the [API Reference](/apireference.html), which handles all authentication for you.

## Authentication flow

When an app is registered for the API, it is given a Client ID. This unique code identifies the application to MyHomeworkSpace. When the app wants to gain access to a user's account, they send the user to the `application/requestAuth/:clientid` endpoint, where :clientid is replaced with your application's Client ID. The user is then redirected to a sign in screen where they can approve your application's access. If they approve your app, they are sent to your Callback URL (set at app registration) with a query string (url parameter) called token, with a specific token.

<div class="mermaid">
    graph TD;
	Client[Your app] -- sends user to application/requestAuth/:clientId -->SignIn[User prompted to give account access]
	SignIn -- User Grants Permission -->Callback[Callback URL with token query string]
	SignIn -- User Rejects Permission -->MHS[MyHomeworkSpace home page]
</div>

## Endpoints
All endpoints are listed in the [API Reference](/apireference.html). Click on any endpoint to view more details about it.
<ul>
	{% for endpoint in site.endpoints %}
	<li>
		<a href="#{{endpoint.endpoint | slugify: "ascii"}}"><span
			class="badge badge-{% if endpoint.method == "POST" %}success{% else %}primary{%endif%}">{{endpoint.method}}</span>
		{{ endpoint.endpoint }}</a>
	</li>
	{% endfor %}
</ul>