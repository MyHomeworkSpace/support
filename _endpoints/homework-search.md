---
endpoint: homework/search
method: GET
fields:
  - name: q
    type: string
    description: The query to search for
    required: true
---

Searches for a homework assignment.

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