---
endpoint: notifications/add
method: POST
fields:
  - name: id
    type: integer
    description: Unique id of the notification
    required: true
---

Deletes a notification from MyHomeworkSpace. Note that this call requires a `user.level >= 1`.

### Sample Response
```json
{
	"status": "ok"
}
```