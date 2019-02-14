---
endpoint: homework/getPickerSuggestions
method: GET
---

Gets a few suggestions for homework assignments to add to calendar.

### Sample Response

```json
{
	"status": "ok",
	"homework": [
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