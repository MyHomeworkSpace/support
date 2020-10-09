---
endpoint: prefixes/add
method: POST
body: application/x-www-form-urlencoded
fields:
  - name: color
    type: hexadecimal color (without /#)
    description: Text color in tag
    required: true
  - name: background
    type: hexadecimal color (without /#)
    description: Background color in tag
    required: true
  - name: words
    type: JSON array of strings
    description: Words to be used be used as prefixes
    required: true
  - name: timedEvent
    type: bool
    description: true if the event is timed (like a quiz, test, or lab) or false if the event is not timed (like a homework or take home test)
    required: true
---

Creates a tag.

### Sample Response
```json
{
	"status": "ok"
}
```