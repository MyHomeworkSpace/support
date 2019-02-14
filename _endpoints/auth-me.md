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
	"grade": 11,
	"tabs": [],
	"id": 1,
	"name": "Joe Schmo",
	"username": "c99js",
	"email": "c99js@dalton.org",
	"type": "student",
	"features": "[]",
	"level": 0,
	"showMigrateMessage": 0
}
```