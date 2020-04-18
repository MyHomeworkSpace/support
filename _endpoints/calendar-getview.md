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

Fetches the calendar view for a given range.

### Event tags
Some events may contain more data than just the name, start, and end. This is referred to as an event's _metadata_ and is stored in the `tags` object of an event. The `tags` objects is a key-value store, where the keys are numeric and correspond to different information that may be stored with an event. For example, a Homework event may have a `tags` object that looks like this, where `2` is the number that corresponds to the "homework" tag:

```json
"tags": {
	"2": {
		"id": 24,
		"name": "Read next chapter",
		"due": "2019-05-23",
		"desc": "",
		"complete": 0,
		"classId": 3,
		"userId": 1
	}
}
```

While a given tag may not be present on all events, if it is present, it is guaranteed to be the correct type. For example, the "building name" tag will, if present, always be a string. See the sample response below for more examples. A full list of tags is below:

| name | numeric value | description |
| ---- | ------------- | ----------- |
| Reserved for future use | 0 | (reserved) |
| Description | 1 | string: A description associated with the event. |
| Homework | 2 | object: A homework item associated with the event. |
| Term ID | 3 | int: The Term ID associated with the event. Currently only used by the schedule provider for The Dalton School. |
| Class ID | 4 | int: The Class ID associated with the event. Currently only used by the schedule provider for The Dalton School. |
| Owner ID | 5 | int: The ID of the event's owner, such as a class's instructor. |
| Owner name | 6 | string: The name of the event's owner, such as a class's instructor. |
| Day number | 7 | int: The day number associated with the event. Currently only used by the schedule provider for The Dalton School. |
| Block | 8 | string: The scheduling block or period associated with the event. |
| Building name | 9 | string: The building name of the event. |
| Room number | 10 | string: The room number of the event. |
| Location | 11 | string: The location of the event. |
| Read-only | 12 | boolean: If true, this event cannot be edited directly. It may still be possible to cancel the event or apply certain modifications. |
| Short name | 13 | string: A short name of the event, suitable for display in a week or month view. |
| Actions | 14 | object[]: Actions associated with the event, such as relevant external links. |
| Cancelled | 15 | boolean: If true, this event has been marked as cancelled, and should be displayed as such. |

### Sample Response
Due to the length of this snippet, it has been collapsed. Click “Expand code” to expand it.

<details>
<summary>Expand code...</summary>

<pre><code class="json">
{
  "status": "ok",
  "view": {
    "providers": [
      {
        "name": "The Dalton School Schedule"
      }
    ],
    "days": [
      {
        "day": "2019-03-11",
        "announcements": [],
        "events": [
          {
            "id": 1689,
            "name": "Computer Science",
            "start": 1552329000,
            "end": 1552331700,
            "recurRule": null,
            "tags": {
              "3": 97372,
              "4": 108697389,
              "5": 1320694,
              "6": "Sample Teacher",
              "7": 1,
              "8": "G",
              "9": "108 E. 89th St.",
              "10": "502"
            },
            "source": 0,
            "userId": 1
          }
        ]
      },
      {
        "day": "2019-03-12",
        "announcements": [],
        "events": [
          {
            "id": 1665,
            "name": "Physics",
            "start": 1552399800,
            "end": 1552405500,
            "recurRule": null,
            "tags": {
              "3": 97372,
              "4": 108471973,
              "5": 586292,
              "6": "Sample Teacher",
              "7": 2,
              "8": "H",
              "9": "108 E. 89th St.",
              "10": "1205"
            },
            "source": 0,
            "userId": 1
          }
        ]
      },
      {
        "day": "2019-03-13",
        "announcements": [],
        "events": [
          {
            "id": 1691,
            "name": "Math",
            "start": 1552492200,
            "end": 1552494900,
            "recurRule": null,
            "tags": {
              "3": 97372,
              "4": 108644631,
              "5": 586462,
              "6": "Sample Teacher",
              "7": 3,
              "8": "I",
              "9": "108 E. 89th St.",
              "10": "503"
            },
            "source": 0,
            "userId": 1
          }
        ]
      },
      {
        "day": "2019-03-14",
        "announcements": [],
        "events": [
          {
            "id": 1697,
            "name": "Robotics",
            "start": 1552572600,
            "end": 1552575300,
            "recurRule": null,
            "tags": {
              "3": 97372,
              "4": 108472048,
              "5": 3313989,
              "6": "Sample Teacher",
              "7": 4,
              "8": "D",
              "9": "108 E. 89th St.",
              "10": "502"
            },
            "source": 0,
            "userId": 1
          }
        ]
      },
      {
        "day": "2019-03-15",
        "announcements": [
          {
            "id": -1,
            "date": "2019-03-15",
            "text": "Friday 4",
            "grade": -1,
            "type": 0
          }
        ],
        "events": [
          {
            "id": 1702,
            "name": "History",
            "start": 1552651800,
            "end": 1552654500,
            "recurRule": null,
            "tags": {
              "3": 97372,
              "4": 108569265,
              "5": 4791732,
              "6": "Sample Teacher",
              "7": 8,
              "8": "C",
              "9": "108 E. 89th St.",
              "10": "350"
            },
            "source": 0,
            "userId": 1
          }
        ]
      },
      {
        "day": "2019-03-16",
        "announcements": [
          {
            "id": 127,
            "date": "2019-03-16",
            "text": "Start of Spring Recess",
            "grade": 0,
            "type": 2
          }
        ],
        "events": [
          {
            "id": 8,
            "name": "Some important event",
            "start": 1552761900,
            "end": 1552763700,
            "recurRule": null,
            "tags": {
              "1": ""
            },
            "source": -1,
            "userId": 1
          },
          {
            "id": 1,
            "name": "Read next chapter",
            "start": 1552756500,
            "end": 1552759200,
            "recurRule": null,
            "tags": {
              "2": {
                "id": 24,
                "name": "Read next chapter",
                "due": "2019-05-23",
                "desc": "",
                "complete": 0,
                "classId": 3,
                "userId": 1
              }
            },
            "source": -1,
            "userId": 1
          }
        ]
      },
      {
        "day": "2019-03-17",
        "announcements": [
          {
            "id": 127,
            "date": "2019-03-17",
            "text": "Spring Recess",
            "grade": 0,
            "type": 2
          }
        ],
        "events": []
      }
    ]
  }
}
</pre></code></details>