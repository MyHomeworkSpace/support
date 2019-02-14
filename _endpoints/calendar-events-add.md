---
endpoint: calendar/events/add
method: POST
body: application/x-www-form-urlencoded
fields: 
  - name: name
    type: string
    description: Name of the new event
    required: true
  - name: start
    type: datetime (ISO8601)
    description: Start date and time of event
    required: true
  - name: end
    type: datetime (ISO8601)
    description: End date and time of event
    required: true
  - name: desc
    type: textarea
    description: Description of event
    required: false
---

Adds an event to the calendar.

## Sample Response

```json
{
	"status": "ok"
}
```