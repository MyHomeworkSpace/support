---
endpoint: prefs/set
method: POST
body: application/x-www-form-urlencoded
fields:
  - name: key
    type: string
    description: key for preference
    required: true
  - name: value
    type: value for preference
    description: 0 or 1
    required: true
---

Set a preference.

### Sample Response
```json
{
    "status": "ok"
}
```