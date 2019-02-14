---
endpoint: calendar/import
method: POST
body: application/x-www-form-urlencoded
fields: 
  - name: password
    type: string
    description: User's Dalton Password. Note that this is sensative data and is not stored by MyHomeworkSpace. If you choose to store this data, it should be stored securely.
    required: true
    formtype: password
---

Imports a user's schedule into MyHomeworkSpace

### Sample Response
```json
{
	"status": "ok"
}
```