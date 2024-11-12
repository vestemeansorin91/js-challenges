import fs from "fs";

const { cinemas } = JSON.parse(fs.readFileSync("./data/cinemas.json", "utf-8"));

const cinemaService = {
  findCinemaById: (cinemaId) => {
    return cinemas.find((cinema) => cinema.cinemaId === cinemaId) || null;
  },
  listCinemasByLocation: (location) => {
    return cinemas.filter((cinema) => cinema.location === location);
  },
  getCinemaFacilities: (cinemaId) => {
    let selectedCinema = cinemas.find((cinema) => cinema.cinemaId === cinemaId);
    if (!selectedCinema) {
      return [];
    }

    return selectedCinema.facilities;
  },
  getCinemaScreens: (cinemaId) => {
    let selectedCinema = cinemas.find((cinema) => cinema.cinemaId === cinemaId);
    if (!selectedCinema) {
      return [];
    }

    return selectedCinema.screens;
  },
  getAvailableSeats: (cinemaId, movieId, showtime) => {
    /* implementation */
  },
  bookSeat: (cinemaId, movieId, showtime, seatId) => {
    /* implementation */
  },
  getCinemaCapacity: (cinemaId) => {
    /* implementation */
  },
};

export default cinemaService;
