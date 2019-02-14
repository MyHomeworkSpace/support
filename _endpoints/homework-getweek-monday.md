---
endpoint: homework/getWeek/:monday
method: GET
tryItOutDisabled: true
---

Gets all homework for a particular week. Note that `:monday` is a URL parameter for the ISO8601 date of the Monday of the week to get.

### Sample Response

```json
{
	"status": "ok",
	"homework": [
		{
			"id": 1,
			"name": "HW 1",
			"due": "2019-02-14",
			"desc": "",
			"complete": 0,
			"classId": 1,
			"userId": 1
		},
		{
			"id": 2,
			"name": "Essay Nuclear Energy",
			"due": "2019-02-15",
			"desc": "",
			"complete": 0,
			"classId": 1,
			"userId": 1
		}
	]
}
```