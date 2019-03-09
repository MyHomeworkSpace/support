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
  - name: recur
    type: boolean
    description: Set whether the event recurs or not
    required: false
  - name: recurFrequency
    type: integer
    description: Sets the frequency of the event's recurrence (0 = daily, 1 = weekly, 2 = monthly, 3 = yearly)
    required: false
  - name: recurInterval
    type: integer
    description: Sets the interval between two occurences of the same event 
    required: false
  - name: recurUntil
    type: date (ISO8601)
    description: Sets when the recurring event stops its recurrence
    required: false
---

Edits an event on the calendar.

## Sample Response

```json
{
	"status": "ok"
}
```