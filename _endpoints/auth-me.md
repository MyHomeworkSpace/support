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

<div class="alert alert-warning">
<strong>Caution!</strong> The response to this endpoint may contain additional fields not described here. These fields are intended for backwards compatibility with older clients, and so may break or disappear at any time. Please ensure you use only the fields described in the sample below.
</div>

### Sample Response

```json
{
	"status": "ok",
	"user": {
		"id": 1,
		"name": "Joe Schmo",
		"email": "joe.schmo@example.com",
		"type": "mhs",
		"level": 0,
		"emailVerified": true,
		"showMigrateMessage": 0,
		"schools": [
			{
				"enrollmentID": 1,
				"schoolID": "dalton",
				"displayName": "The Dalton School",
				"userDetails": "Signed in as Schmo, Joseph (Joe) '19 (c99js)",
				"emailAddress": "c99js@dalton.org",
				"userID": 1
			}
		]
	}
}
```
