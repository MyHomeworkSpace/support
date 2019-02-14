---
endpoint: prefs/get/:key
method: GET
tryItOutDisabled: true
---

Get a preference.

### Sample Response
```json
{
    "status": "ok",
    "pref": {
        "id": 1,
        "key": "disableQuickAdd",
        "value": "true"
    }
}
```