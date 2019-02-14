---
endpoint: notifications/add
method: POST
body: application/x-www-form-urlencoded
fields:
  - name: content
    type: string
    description: Content of the notification
    required: true
  - name: expiry
    type: Date (ISO8601)
    description: Date that the notification expires.
    required: true
---

Adds a notification to MyHomeworkSpace. Note that this call requires a `user.level >= 1`.

### Sample Response
```json
{
	"status": "ok"
}
```