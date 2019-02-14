---
endpoint: calendar/hwEvents/add
method: POST
body: application/x-www-form-urlencoded
fields: 
  - name: homeworkId
    type: integer
    description: ID number of the homework assignment that the calendar event is being made for
    required: true
  - name: start
    type: datetime (ISO8601)
    description: Start date and time of event
    required: true
  - name: end
    type: datetime (ISO8601)
    description: End date and time of event
    required: true
---

Adds an event to the calendar from homework.

## Sample Response

```json
{
	"status": "ok"
}
```