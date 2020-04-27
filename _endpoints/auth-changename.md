---
endpoint: auth/changeName
method: POST
body: application/x-www-form-urlencoded
fields: 
  - name: new
    type: text
    description: New name for user
    required: true
---

Changes the name of the signed in user.

### Sample Response
```json
{
	"status": "ok"
}
```