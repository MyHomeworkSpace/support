---
endpoint: homework/getWeek/:date
method: GET
tryItOutDisabled: true
---

Gets all homework for a particular week. `:date` is a URL parameter for the first date of the week being queried, in ISO8601 format.

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