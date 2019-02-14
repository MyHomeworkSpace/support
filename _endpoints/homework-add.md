---
endpoint: homework/add
method: POST
body: application/x-www-form-urlencoded
fields:
  - name: name
    type: string
    description: Name of the homework
    required: true
  - name: due
    type: date (ISO8601)
    description: Due date of the homework
    required: true
  - name: complete
    type: 1 or 0
    description: 1 if the homework is completed, 0 if the homework is not completed
    required: true
  - name: classId
    type: integer
    description: Unique id of the class that the homework is in
    required: true
  - name: desc
    type: text
    description: Description of the homework
    required: false
---

Creates a new homework assignment

### Sample Response
```json
{
	"status": "ok"
}
```