---
endpoint: admin/getAllFeedback
method: GET
# body: application/x-www-form-urlencoded
# fields: 
#   - name: test
#     type: text
#     description: testy field
#     required: true
#   - name: second
#     type: number
#     description: second field
#     required: false
---

Gets all the feedback that was submitted. Note: Accessing this endpoint requires a `user.level >= 1`.

### Sample Response

```json
{
	"status": "ok",
	"feedbacks": [
		{
			"id": 1,
			"userid": 1,
			"type": "smile",
			"text": "I like MyHomeworkSpace",
			"timestamp": "2019-02-07 23:14:10",
			"userName": "Joe Schmo",
			"userEmail": "c99js@dalton.org",
			"hasScreenshot": false
		},
		{
			"id": 2,
			"userid": 1,
			"type": "idea",
			"text": "You should have better API documentation",
			"timestamp": "2019-02-07 23:14:46",
			"userName": "Joe Schmo",
			"userEmail": "c99js@dalton.org",
			"hasScreenshot": false
		},
	]
}
```