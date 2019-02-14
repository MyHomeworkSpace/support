---
endpoint: classes/edit
method: POST
body: application/x-www-form-urlencoded
fields:
  - name: id
    type: integer
    description: Unique id of the class to update
    required: true
  - name: name
    type: string
    description: Updated name of the class
    required: true
  - name: color
    type: hexadecimal color (without \#)
    description: Updated color of the class
    required: true
  - name: teacher
    type: string
    description: Updated name of the teacher of the class
    required: false
---

Updates a class.

### Sample Response
```json
{
	"status": "ok"
}
```