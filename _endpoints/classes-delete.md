---
endpoint: classes/delete
method: POST
body: application/x-www-form-urlencoded
destructive: true
fields:
  - name: id
    type: integer
    description: Unique id of the class to delete
    required: true
---

Deletes a class.

### Sample Response
```json
{
	"status": "ok"
}
```