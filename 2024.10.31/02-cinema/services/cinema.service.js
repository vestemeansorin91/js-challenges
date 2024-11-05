import fs from 'fs';

const { cinemas } = JSON.parse(fs.readFileSync('./data/cinemas.json', 'utf-8'));

const cinemaService = {
    findCinemaById: (cinemaId) => { 
      return cinemas.find(cinema => cinema.cinemaId === cinemaId) || null;
     },
    listCinemasByLocation: (location) => { /* implementation */ },
    getCinemaFacilities: (cinemaId) => { /* implementation */ },
    getCinemaScreens: (cinemaId) => { /* implementation */ },
    getAvailableSeats: (cinemaId, movieId, showtime) => { /* implementation */ },
    bookSeat: (cinemaId, movieId, showtime, seatId) => { /* implementation */ },
    getCinemaCapacity: (cinemaId) => { /* implementation */ },
  };
  
  export default cinemaService;  
