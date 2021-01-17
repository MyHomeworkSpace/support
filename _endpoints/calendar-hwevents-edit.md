---
endpoint: calendar/hwEvents/edit
method: POST
body: application/x-www-form-urlencoded
fields: 
  - name: id
    type: integer
    description: ID number calendar event to edit
    required: true
  - name: homeworkId
    type: integer
    description: Updated ID number of homework corresponding to event
    required: true
  - name: start
    type: datetime (ISO8601)
    description: Updated start date and time of event
    required: true
  - name: end
    type: datetime (ISO8601)
    description: Updated end date and time of event
    required: true
---

Edits a homework event on the calendar.

## Sample Response

```json
{
	"status": "ok"
}
```