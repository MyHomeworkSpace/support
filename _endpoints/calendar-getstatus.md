---
endpoint: calendar/getStatus
method: GET
# body: application/x-www-form-urlencoded
# fields: 
#   - name: test
#     type: text
#     description: testy field
#     required: true
#   - name: second
#     type: number
#     description: second field
#     required: false
---

Checks to see if the user has enabled the calendar. Returns a `statusNum`.

- `statusNum == 0` - Calendar is not imported.
- `statusNum == 1` - Calendar requires re-importing.
- `statusNum == 2` - Calendar is setup and ready to go.

### Sample Response
```json
{
	"status": "ok",
	"statusNum": 1
}
```