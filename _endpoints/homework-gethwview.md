---
endpoint: homework/getHWView
method: GET
---

Gets the user's active homework

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