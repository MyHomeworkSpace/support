---
endpoint: calendar/resetSchedule
method: POST
# body: application/x-www-form-urlencoded
# fields: 
#   - name: password
#     type: string
#     description: User's Dalton Password. Note that this is sensative data and is not stored by MyHomeworkSpace. If you choose to store this data, it should be stored securely.
#     required: true
#     formtype: password
---

Removes a user's schedule from MyHomeworkSpace. Though this disables Calendar view, it does not remove events manually added to the calendar by the user. To view those events, the user's schedule needs to be reimported.

### Sample Response
```json
{
	"status": "ok"
}
```