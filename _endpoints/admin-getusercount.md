---
endpoint: admin/getUserCount
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
Gets the number of registered users.

### Sample Response

```json
{
	"status": "ok",
	"count": 42
}
```