---
endpoint: calendar/getView
method: GET
body: application/x-www-form-urlencoded
fields: 
  - name: start
    type: date (ISO8601)
    description: Inclusive start date of calendar view
    required: true
  - name: end
    type: date (ISO8601)
    description: Exclusive end date of calendar view
    required: true
---

Gets a range of dates from the calendar

### Sample Response
Due to the length of this snippet, it has been collapsed. Click “Expand code” to expand it.

<details>
<summary>Expand code...</summary>

<pre><code class="json">
{
	"status": "ok",
	"view": {
		"days": [
			{
				"day": "2019-02-14",
				"shiftingIndex": -1,
				"currentTerm": {
					"id": 2,
					"termId": 97372,
					"name": "2nd Semester",
					"userId": 1
				},
				"announcements": [],
				"events": [
					{
						"id": 15,
						"name": "HS House - Neiers/Phillips",
						"start": 1550155800,
						"end": 1550156700,
						"type": 2,
						"data": {
							"termId": -1,
							"classId": 108778111,
							"ownerId": -1,
							"ownerName": "Jake Peralta",
							"dayNumber": 4,
							"block": "S",
							"buildingName": "108 E. 89th St.",
							"roomNumber": "301"
						},
						"userId": 1
					},
					{
						"id": 18,
						"name": "Assembly",
						"start": 1550163000,
						"end": 1550166600,
						"type": 2,
						"data": {
							"termId": -1,
							"classId": 108778111,
							"ownerId": -1,
							"ownerName": "Jake Peralta",
							"dayNumber": 4,
							"block": "S",
							"buildingName": "108 E. 89th St.",
							"roomNumber": "Theater"
						},
						"userId": 1
					},
					{
						"id": 90,
						"name": "Environmental Science: Resources - 3335-01 (B)",
						"start": 1550149800,
						"end": 1550152500,
						"type": 2,
						"data": {
							"termId": 97372,
							"classId": 108471529,
							"ownerId": 2615842,
							"ownerName": "Amy Santiago",
							"dayNumber": 4,
							"block": "B",
							"buildingName": "108 E. 89th St.",
							"roomNumber": "1204"
						},
						"userId": 1
					},
					{
						"id": 91,
						"name": "Robotics - 3410-04 (A)",
						"start": 1550152800,
						"end": 1550155500,
						"type": 2,
						"data": {
							"termId": 97372,
							"classId": 108472052,
							"ownerId": 3313989,
							"ownerName": "Rosa Diaz",
							"dayNumber": 4,
							"block": "A",
							"buildingName": "108 E. 89th St.",
							"roomNumber": "502"
						},
						"userId": 1
					},
					{
						"id": 92,
						"name": "AMLIT: Self, Society and Cosmos - 3232-01 (D)",
						"start": 1550157000,
						"end": 1550159700,
						"type": 2,
						"data": {
							"termId": 97372,
							"classId": 108471731,
							"ownerId": 586333,
							"ownerName": "Charles Boyle",
							"dayNumber": 4,
							"block": "D",
							"buildingName": "108 E. 89th St.",
							"roomNumber": "203"
						},
						"userId": 1
					},
					{
						"id": 93,
						"name": "Mandarin Chinese 3 - 3122-01 (C)",
						"start": 1550160000,
						"end": 1550162700,
						"type": 2,
						"data": {
							"termId": 97372,
							"classId": 108471856,
							"ownerId": 5327271,
							"ownerName": "Terrence Jeffords",
							"dayNumber": 4,
							"block": "C",
							"buildingName": "108 E. 89th St.",
							"roomNumber": "252"
						},
						"userId": 1
					},
					{
						"id": 94,
						"name": "Topics in World History III: The 20th Century - 3520-03 (F)",
						"start": 1550172600,
						"end": 1550175300,
						"type": 2,
						"data": {
							"termId": 97372,
							"classId": 108472098,
							"ownerId": 3456065,
							"ownerName": "Raymond Holt",
							"dayNumber": 4,
							"block": "F",
							"buildingName": "108 E. 89th St.",
							"roomNumber": "311"
						},
						"userId": 1
					}
				]
			}
		]
	}
}
</pre></code></details>