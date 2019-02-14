---
endpoint: prefixes/delete
method: POST
body: application/x-www-form-urlencoded
fields:
  - name: id
    type: integer
    description: Unique id of the tag to delete
    required: true
---

Deletes a tag.

### Sample Response
```json
{
	"status": "ok"
}
```