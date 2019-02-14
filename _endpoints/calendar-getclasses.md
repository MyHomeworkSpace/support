---
endpoint: calendar/getClasses
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

Gets the user's classes. 

## Sample Response

Due to the length of this snippet, it has been collapsed. Click "Expand code" to expand it.

<details>
<summary>Expand code...</summary>
<pre><code class="json">
{
    "status": "ok",
    "classes": [{
        "id": 8353,
        "termId": 97371,
        "ownerId": 4841198,
        "sectionId": 108697375,
        "name": "Adv. Data Structures and Algorithms 'A' - 3432-03 (G)",
        "ownerName": "Jake Peralta",
        "userId": 6
    }, {
        "id": 8354,
        "termId": 97371,
        "ownerId": 586333,
        "sectionId": 108471730,
        "name": "AMLIT: Self, Society and Cosmos - 3232-01 (D)",
        "ownerName": "Amy Santiago",
        "userId": 6
    }, {
        "id": 8351,
        "termId": 97372,
        "ownerId": 4742430,
        "sectionId": 108471565,
        "name": "College Group Meeting 11 - 3652-07 (K)",
        "ownerName": "Charles Boyle",
        "userId": 6
    }, {
        "id": 8347,
        "termId": 97371,
        "ownerId": 2615842,
        "sectionId": 108576047,
        "name": "Environmental Science: Biodiversity - 3334-01 (B)",
        "ownerName": "Rosa Diaz",
        "userId": 6
    }, {
        "id": 8341,
        "termId": 97372,
        "ownerId": 2615842,
        "sectionId": 108471529,
        "name": "Environmental Science: Resources - 3335-01 (B)",
        "ownerName": "Rosa Diaz",
        "userId": 6
    }, {
        "id": 8359,
        "termId": -1,
        "ownerId": -1,
        "sectionId": 108778111,
        "name": "HS House - Neiers/Phillips",
        "ownerName": "Raymond Holt",
        "userId": 6
    }, {
        "id": 8360,
        "termId": 97371,
        "ownerId": 5327271,
        "sectionId": 108471855,
        "name": "Mandarin Chinese 3 - 3122-01 (C)",
        "ownerName": "Terrence Jeffords",
        "userId": 6
    }, {
        "id": 8343,
        "termId": 97371,
        "ownerId": 4791666,
        "sectionId": 109411918,
        "name": "Physical Education - 3900F-01",
        "ownerName": "Madeline Wunch",
        "userId": 6
    }, {
        "id": 8344,
        "termId": 97371,
        "ownerId": 4791666,
        "sectionId": 108640991,
        "name": "Physical Education - 3903-05 (I)",
        "ownerName": "Madeline Wunch",
        "userId": 6
    }, {
        "id": 8345,
        "termId": 97371,
        "ownerId": 4791666,
        "sectionId": 108641001,
        "name": "Physical Education - 3903-10 (Z)",
        "ownerName": "Madeline Wunch",
        "userId": 6
    }, {
        "id": 8352,
        "termId": 97372,
        "ownerId": 5334315,
        "sectionId": 108471759,
        "name": "Precalculus 1 'A' - 3024-02 (H)",
        "ownerName": "Gina Linetti",
        "userId": 6
    }, {
        "id": 8348,
        "termId": 97371,
        "ownerId": 3313989,
        "sectionId": 108472051,
        "name": "Robotics - 3410-04 (A)",
        "ownerName": "Meredith Gray",
        "userId": 6
    }, {
        "id": 8342,
        "termId": 97372,
        "ownerId": 3456065,
        "sectionId": 108472098,
        "name": "Topics in World History III: The 20th Century - 3520-03 (F)",
        "ownerName": "Christina Yang",
        "userId": 6
    }, {
        "id": 8346,
        "termId": 97371,
        "ownerId": 2517567,
        "sectionId": 109224925,
        "name": "Web Engineering - 3434-06 (I)",
        "ownerName": "Miranda Bailey",
        "userId": 6
    }]
}
</pre></code>
</details>