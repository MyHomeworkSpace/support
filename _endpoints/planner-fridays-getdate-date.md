---
endpoint: planner/fridays/get/:date
method: GET
tryItOutDisabled: true
---

Gets the number of a particular Friday. `:date` is a URL parameter for the Friday being queried.

### Sample Response

```json
{
	"status": "ok",
	"friday": {
		"id": 1,
		"date": "2019-02-15",
		"index": 3
	}
}
```
