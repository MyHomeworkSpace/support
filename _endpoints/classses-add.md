---
endpoint: classes/add
method: POST
body: application/x-www-form-urlencoded
fields:
  - name: name
    type: string
    description: Name of the new class
    required: true
  - name: color
    type: hexadecimal color (without \#)
    description: Color of the new class
    required: true
  - name: teacher
    type: string
    description: Name of the teacher of the new class
    required: false
---

Creates a new class.

### Sample Response
```json
{
	"status": "ok"
}
```