---
endpoint: homework/getForClass/:id
method: GET
tryItOutDisabled: true
---

Gets all homework for a particular class. Note that `:id` is a URL parameter for the class to get the homework for.

### Sample Response

```json
{
	"status": "ok",
	"homework": [
		{
			"id": 3,
			"name": "HW ",
			"due": "2019-02-06",
			"desc": "",
			"complete": 1,
			"classId": 1,
			"userId": 1
		},
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