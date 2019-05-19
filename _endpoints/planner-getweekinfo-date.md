---
endpoint: planner/getWeekInfo/:date
method: GET
tryItOutDisabled: true
---

Gets the planner announcements for a given week. `:date` is a URL parameter for a date during the week being queried.

### Sample Response

```json
{
    "status": "ok",
    "announcements": [
        {
            "id": 1,
            "date": "2019-02-15",
            "text": "Super important day",
            "grade": 0,
            "type": 0
        }
    ]
}
```