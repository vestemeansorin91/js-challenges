Everything should be in a single file.
I want to be able to create everything that I need for a reservation


Method 1:
- I want to have a method which takes a string which represents the date (ex. `2024-10-31`), startHour (ex. `6`), endHour (ex. `9`), range (ex. `15`) and will create an Object (see Output)

###### INPUT
createReservation(date, startHour, endHour, range)

createReservation('2024-10-31', 6, 9, 15)

###### OUTPUT
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
Method 2:
- I want to have a method to create a category for a certain reservation, reservationId (ex. `1`), title(ex. `Fotbal`)

###### INPUT
createCategory(reservationId, title)

createCategory(1, 'Fotbal')

###### OUTPUT
```
 {
      "id": 1,
      "date": "2024-10-31",
      "categories": [
         {
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
Method 3:
- I want to have a method to create a field

###### INPUT
createField()

createField()

###### OUTPUT
```
 {
      "id": 1,
      "date": "2024-10-31",
      "categories": [
         {
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
Method 4: 
- I want to have a method to add timeSlot for a field, besides the returned value I want to log 

`You've created a reservation on 31 10 2024, from 07:00 to 08:00, on field Fotbal [Zone 1]`

###### INPUT
createTimeField(reservationId, fieldId, startTime, duration)

createTimeField(1, 1, "07:00", 60)

###### OUTPUT
```
 {
      "id": 1,
      "date": "2024-10-31",
      "categories": [
         {
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