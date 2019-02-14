---
endpoint: calendar/events/edit
method: POST
body: application/x-www-form-urlencoded
fields: 
  - name: id
    type: integer
    description: ID number of the event to edit
    required: true
  - name: name
    type: string
    description: Updated name of event
    required: true
  - name: start
    type: datetime (ISO8601)
    description: Updated start date and time of event
    required: true
  - name: end
    type: datetime (ISO8601)
    description: Updated end date and time of event
    required: true
  - name: desc
    type: textarea
    description: Updated description of event
    required: false
---

Edits an event on the calendar.

## Sample Response

```json
{
	"status": "ok"
}
```