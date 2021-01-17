---
endpoint: classes/hwInfo/:id
method: GET
tryItOutDisabled: true
---

Returns the number of homework assignments in a particular class (this includes completed assignments and assignments whose due dates have passed). `:id` is a URL parameter for the ID of the class.

## Sample Response
```json
{
	"status": "ok",
	"hwItems": 2
}
```