---
endpoint: homework/getHWViewSorted
method: GET
fields:
  - name: showToday
    type: '"true" or "false"'
    description: Determines if events due the current day are in the overdue or today column
    required: false
---

Gets a sorted version of Homework

### Sample Response

```json
{
	"status": "ok",
	"tomorrowName": "Tomorrow",
	"showToday": false,
	"overdue": [
		{
			"id": 1,
			"name": "HW 1",
			"due": "2019-02-14",
			"desc": "",
			"complete": 0,
			"classId": 1,
			"userId": 1
		}
	],
	"today": [],
	"tomorrow": [
		{
			"id": 2,
			"name": "Essay Nuclear Energy",
			"due": "2019-02-15",
			"desc": "",
			"complete": 0,
			"classId": 1,
			"userId": 1
		}
	],
	"soon": [],
	"longterm": []
}
```