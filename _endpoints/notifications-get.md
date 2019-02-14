---
endpoint: notifications/get
method: GET
---

Gets active notifications.

### Sample Response
```json
{
	"status": "ok",
	"notifications": [
		{
			"id": 1,
			"content": "Happy winter!",
			"expiry": "2019-02-15"
		},
		{
			"id": 2,
			"content": "Hi!",
			"expiry": "2019-03-01"
		}
	]
}
```
