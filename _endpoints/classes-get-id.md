---
endpoint: classes/get/:id
method: GET
tryItOutDisabled: true
---

Gets information about a particular class. `:id` is a URL parameter for the unique id of that class.

## Sample Response
```json
{
	"status": "ok",
	"class": {
		"id": 1,
		"name": "Science",
		"teacher": "",
		"color": "ffa540",
		"userId": -1
	}
}
```