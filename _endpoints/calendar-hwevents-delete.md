---
endpoint: calendar/hwEvents/delete
method: POST
body: application/x-www-form-urlencoded
fields: 
  - name: id
    type: integer
    description: ID number calendar event to delete
    required: true
destructive: true
---

Edits a homework event on the calendar.

## Sample Response

```json
{
	"status": "ok"
}
```