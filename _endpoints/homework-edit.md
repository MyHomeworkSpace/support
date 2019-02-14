---
endpoint: homework/edit
method: POST
body: application/x-www-form-urlencoded
fields:
  - name: id
    type: integer
    description: Unique id of the homework to edit
    required: true
  - name: name
    type: string
    description: Updated name of the homework
    required: true
  - name: due
    type: date (ISO8601)
    description: Updated due date of the homework
    required: true
  - name: complete
    type: 1 or 0
    description: 1 if the homework is completed, 0 if the homework is not completed
    required: true
  - name: classId
    type: integer
    description: Updated unique id of the class that the homework is in
    required: true
  - name: desc
    type: text
    description: Updated description of the homework
    required: false
---

Edits a homework assignment

### Sample Response
```json
{
	"status": "ok"
}
```