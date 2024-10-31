Start / stop your time, after each Method. Each method is a challenge.

Everything should be in a single file.
I want to be able to create everything that I need for a reservation.


## Method R1:
- I want to have a method which takes a string which represents the date (ex. `2024-10-31`), startHour (ex. `6`), endHour (ex. `9`), range (ex. `15`) and will create an Object (see Output), id is index+1

### INPUT
Skeleton **createReservation**(date, startHour, endHour, range)

Example ***createReservation***('2024-10-31', 6, 9, 15)

### OUTPUT
```
 {
      "id": 1,
      "date": "2024-10-31",
      "categories": [],
      "startHour": 6,
      "endHour": 9,
      "range": 15
}
```
---
## Method R2:
- I want to have a method which can update date, startHour, endHour, range ( can be any of those four)

### INPUT
Skeleton **updateReservationDate**(reservationId, { date, startHour })

Example ***updateReservationDate***(1, { date: '2024-11-02', startHour: 8 })

### OUTPUT
```
 {
      "id": 1,
      "date": "2024-11-02",
      "categories": [],
      "startHour": 8,
      "endHour": 9,
      "range": 15
}
```
## Method R3:
- I want a method which deletes a reservation

### INPUT
Skeleton **deleteReservation**(reservationId)

Example ***deleteReservation***(1)

---
## Method C1:
- I want to have a method to create a category for a certain reservation, reservationId (ex. `1`), title(ex. `Fotbal`)

### INPUT
Skeleton **createCategory**(reservationId, title)

Example **createCategory**(1, 'Fotbal')

### OUTPUT
```
 {
      "id": 1,
      "date": "2024-10-31",
      "categories": [
         {
          "id": 1,
          "title": "Fotbal",
          "fields": []
         }
      ],
      "startHour": 6,
      "endHour": 9,
      "range": 15
}
```



---
## Method C2:
- I want to have a method to update a category for a certain reservation, reservationId (ex. `1`), title(ex. `Squash`)

### INPUT
Skeleton **updateCategory**(reservationId, categoryId, title)

Example **updateCategory**(1, 1, 'Squash')

### OUTPUT
```
 {
      "id": 1,
      "date": "2024-10-31",
      "categories": [
         {
          "id": 1,
          "title": "Squash",
          "fields": []
         }
      ],
      "startHour": 6,
      "endHour": 9,
      "range": 15
}
```

---
## Method C3:
- I want to have a method to delete a category for a certain reservation

### INPUT
Skeleton **deleteCategory**(reservationId, categoryId)

Example **deleteCategory**(1, 1)

---
## Method F1:
- I want to have a method to create a field id is index+1

### INPUT
Skeleton **createField**(reservationId, categoryId)

Example **createField**(1, 1)

### OUTPUT
```
 {
      "id": 1,
      "date": "2024-10-31",
      "categories": [
         {
          "id": 1,
          "title": "Fotbal",
          "fields": [
            {
              "id": 1,
              "occupiedSlots": []
            }
          ]
         }
      ],
      "startHour": 6,
      "endHour": 9,
      "range": 15
}
```

---
## Method F2:
- I want to have a method to delete a field 

### INPUT
Skeleton **deleteField**(reservationId, categoryId, fieldId)

Example **deleteField**(1, 1, 1)

---
## Method TF1: 
- I want to have a method to add timeSlot for a field, id is index+1, besides the returned value I want to log 

`You've created a reservation on 31 10 2024, from 07:00 to 08:00, on field Fotbal [Zone 1]`

### INPUT
Skeleton **createTimeField**(reservationId, categoryId, fieldId, startTime, duration)

Example **createTimeField**(1, 1, 1, "07:00", 60)

### OUTPUT
```
 {
      "id": 1,
      "date": "2024-10-31",
      "categories": [
         {
          "id": 1,
          "title": "Fotbal",
          "fields": [
            {
              "id": 1,
              "occupiedSlots": [
                {
                    "startTime": "07:00",
                    "duration": 60
                }
              ]
            }
          ]
         }
      ],
      "startHour": 6,
      "endHour": 9,
      "range": 15
}
```
---
## Method TF2: 
- I want to have a method to update a timeSlot, I can modify startTime , duration , one or both

`You've created a reservation on 31 10 2024, from 07:00 to 08:00, on field Fotbal [Zone 1]`

### INPUT
Skeleton **updateTimeField**(reservationId, categoryId, fieldId, { startTime, duration })

Example **updateTimeField**(1, 1, 1, {"08:00", 30})

### OUTPUT
```
 {
      "id": 1,
      "date": "2024-10-31",
      "categories": [
         {
          "id": 1,
          "title": "Fotbal",
          "fields": [
            {
              "id": 1,
              "occupiedSlots": [
                {
                    "startTime": "08:00",
                    "duration": 30
                }
              ]
            }
          ]
         }
      ],
      "startHour": 6,
      "endHour": 9,
      "range": 15
}
```