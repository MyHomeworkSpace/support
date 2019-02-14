---
endpoint: calendar/events/delete
method: POST
body: application/x-www-form-urlencoded
fields: 
  - name: id
    type: integer
    description: ID number of the event to delete
    required: true
destructive: true
---

Deletes an event on the calendar.

## Sample Response

```json
{
	"status": "ok"
}
```