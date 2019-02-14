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
    type: string
    description: Words that can be used in tag (seperate multiple with spaces)
    required: true
  - name: isTimedEvent
    type: 1 or 0
    description: 1 if the event is timed (like a quiz, test, or lab) or 0 if the event is not timed (like a homework or take home test)
    required: true
---

Creates a tag.

### Sample Response
```json
{
	"status": "ok"
}
```