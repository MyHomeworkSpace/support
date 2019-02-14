---
endpoint: feedback/add
method: POST
body: application/x-www-form-urlencoded
fields:
  - name: type
    type: string
    description: \"smile", "frown", or "idea"
    required: true
  - name: text
    type: text
    description: 0 or 1
    required: true
  - name: screenshot
    type: base64 png data url
    description: screenshot of issue
    required: false
---

Adds feedback for administrators to view.

### Sample Response
```json
{
	"status": "ok"
}
```