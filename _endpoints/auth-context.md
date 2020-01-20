---
endpoint: auth/context
method: GET
---
Returns details about the logged in user's account and settings. If you're developing a fully featured client, we recommend this API over `auth/me`, as it returns more information in a single request.

<div class="alert alert-warning">
<strong>Caution!</strong> The response to this endpoint may contain additional fields not described here. These fields are intended for backwards compatibility with older clients, and so may break or disappear at any time. Please ensure you use only the fields described in the sample below.
</div>

### Sample Response
```json
{
	"status": "ok",
	"classes": [
		{
			"id": 1,
			"name": "Math",
			"teacher": "asdf",
			"color": "ffa540",
			"sortIndex": 0,
			"userId": 1
		},
		{
			"id": 2,
			"name": "History",
			"teacher": "",
			"color": "40ff73",
			"sortIndex": 1,
			"userId": 1
		},
		{
			"id": 3,
			"name": "English",
			"teacher": "",
			"color": "4071ff",
			"sortIndex": 2,
			"userId": 1
		},
		{
			"id": 4,
			"name": "Language",
			"teacher": "",
			"color": "ff4086",
			"sortIndex": 3,
			"userId": 1
		},
		{
			"id": 5,
			"name": "Science",
			"teacher": "",
			"color": "40ccff",
			"sortIndex": 4,
			"userId": 1
		}
	],
	"user": {
		"id": 1,
		"name": "Joe Schmo",
		"email": "joe.schmo@example.com",
		"type": "mhs",
		"level": 0,
		"emailVerified": true,
		"showMigrateMessage": 0,
		"schools": [
			{
				"enrollmentID": 1,
				"schoolID": "dalton",
				"displayName": "The Dalton School",
				"userDetails": "Signed in as Schmo, Joseph (Joe) '19 (c99js)",
				"emailAddress": "c99js@dalton.org",
				"userID": 1
			}
		]
	},
	"prefixes": [
		{
			"id": -1,
			"background": "4C6C9B",
			"color": "FFFFFF",
			"words": [
				"HW",
				"Read",
				"Reading"
			],
			"timedEvent": false,
			"default": true
		},
		{
			"id": -1,
			"background": "9ACD32",
			"color": "FFFFFF",
			"words": [
				"Project"
			],
			"timedEvent": false,
			"default": true
		},
		{
			"id": 1,
			"background": "FF4086",
			"color": "FFFFFF",
			"words": [
				"Custom"
			],
			"timedEvent": false,
			"default": false
		}
	],
	"prefixFallbackBackground": "FFD3BD",
	"prefixFallbackColor": "000000",
	"prefs": [
		{
			"id": 1,
			"key": "background",
			"value": "img:2"
		}
	]
}
```
