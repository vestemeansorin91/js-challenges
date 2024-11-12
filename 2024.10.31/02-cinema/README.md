## How to develop / code

- Navigate to folder `02-cinema`
- Run `npm install`
- Go to a service (ex. `./services/cinema.service.js`)
- Start coding
- You need to pass the tests, navigate to folder `02-cinema`
- Run `npm run test:with:browser`
- This script will generate a folder called `2024.10.31/02-cinema/mochawesome-report`, inside will be a `mochaawesome.html`
- Run with Live Server script from VS CODE the `mochaawesome.html` file
- Browser should open automatically and you will see all tests

---

### Cinema Methods

`findCinemaById(cinemaId)`

`listCinemasByLocation(location)`

`getCinemaFacilities(cinemaId)`

`getCinemaScreens(cinemaId)`

`getAvailableSeats(cinemaId, movieId, showtime)`

`bookSeat(cinemaId, movieId, showtime, seatId)`

`getCinemaCapacity(cinemaId)`

### Facilities Methods

`getFacilityLabel(facilityKey)`

`listAllFacilities()`

`findCinemasWithFacility(facilityKey)`

### Genre Methods

`getGenreLabel(genreKey)`

`listAllGenres()`

`findMoviesByGenre(genreKey)`

### Movie Methods

`findMovieById(movieId)`

`listMoviesByGenre(genreKey)`

`listMoviesByCinema(cinemaId)`

`getMovieDuration(movieId)`

`listShowtimes(cinemaId, movieId)`

`getMovieGenres(movieId)`

`getOccupiedSeats(cinemaId, movieId, showtime)`
