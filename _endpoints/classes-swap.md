---
endpoint: classes/swap
method: POST
body: application/x-www-form-urlencoded
fields:
  - name: id1
    type: integer
    description: Unique id of the first class
    required: true
  - name: id2
    type: integer
    description: Unique id of the second class
    required: true
---

Swaps two classes positions in the planner.

### Sample Response
```json
{
	"status": "ok"
}
```