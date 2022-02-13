---
endpoint: planner/getWeekInfo/:date
method: GET
tryItOutDisabled: true
---

Gets the planner announcements for a given week. `:date` is a URL parameter for the first date of the week being queried, in ISO8601 format.

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