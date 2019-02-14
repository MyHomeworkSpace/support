---
endpoint: homework/delete
method: POST
body: application/x-www-form-urlencoded
destructive: true
fields:
  - name: id
    type: integer
    description: Unique id of the homework to delete
    required: true
---