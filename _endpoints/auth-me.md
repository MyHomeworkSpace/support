---
endpoint: auth/me
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
Returns the logged in user's profile information.

**The response to this endpoint may contain additional fields not described here. These fields are intended for backwards compatibility with older clients, and so may break or disappear at any time. Please ensure you use only the fields described in the sample below.**

### Sample Response

```json
{
	"status": "ok",
	"user": {
		"id": 1,
		"name": "Joe Schmo",
		"username": "c99js",
		"email": "c99js@dalton.org",
		"type": "student",
		"features": "[]",
		"level": 0,
		"showMigrateMessage": 0
	},
	"tabs": []
}
```