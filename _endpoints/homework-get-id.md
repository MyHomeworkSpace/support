---
endpoint: homework/get/:id
method: GET
tryItOutDisabled: true
---

Gets a homework assignment with a specific id. Note that `:id` is a URL parameter for the id of the homework to get.

### Sample Response
```json
{
	"status": "ok",
	"homework": {
		"id": 1,
		"name": "HW 1",
		"due": "2019-02-14",
		"desc": "",
		"complete": 0,
		"classId": 1,
		"userId": 1
	}
}
```