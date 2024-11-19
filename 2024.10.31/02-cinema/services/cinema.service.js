import * as cinemasJson from "#root/data/cinemas.json" with { type: "json" };
const cinemas = cinemasJson.cinemas;

/**
 * @typedef {Object} Cinema
 * @property {number} cinemaId - Unique identifier for the cinema.
 * @property {string} name - Name of the cinema.
 * @property {string} location - Location of the cinema.
 * @property {string[]} screens - Available screen types in the cinema.
 * @property {string[]} facilities - Facilities available at the cinema.
 * @property {Object[]} rooms - Rooms within the cinema.
 * @property {number} noOfSeats - Number of seats in the cinema.
 * @property {Object.<string, number>} seatConfiguration - Seat configuration in the cinema.
 * @property {string[]} occupiedSeats - List of occupied seat IDs in the cinema.
 */

/**
 * @type {Cinema[]}
 */

const cinemaService = {
  /**
   * Finds a cinema by its ID.
   * @param {number} cinemaId - The ID of the cinema to find.
   * @returns {Cinema|null} The cinema object if found, otherwise null.
   */
  findCinemaById: (cinemaId) => {
    return cinemas.find((cinema) => cinema.cinemaId === cinemaId) || null;
  },
  /**
   * Lists all cinemas in a specified location.
   * @param {string} location - The location to search for cinemas.
   * @returns {Cinema[]} An array of cinemas located in the specified area.
   */
  listCinemasByLocation: (location) => {
    return cinemas.filter((cinema) => cinema.location === location);
  },
  /**
   * Gets the facilities available at a specified cinema.
   * @param {number} cinemaId - The ID of the cinema to retrieve facilities from.
   * @returns {string[]} An array of facility names available at the cinema.
   */
  getCinemaFacilities: (cinemaId) => {
    let cinema = cinemas.find((cinema) => cinema.cinemaId === cinemaId);
    if (!cinema) {
      return [];
    }

    return cinema.facilities;
  },
  /**
   * Retrieves the screen types available at a specified cinema.
   * @param {number} cinemaId - The ID of the cinema to retrieve screen types from.
   * @returns {string[]} An array of screen types (e.g., "IMAX", "2D") available at the cinema.
   */
  getCinemaScreens: (cinemaId) => {
    let cinema = cinemas.find((cinema) => cinema.cinemaId === cinemaId);
    if (!cinema) {
      return [];
    }

    return cinema.screens;
  },
  /**
   * Retrieves available seats for a specific movie at a specific time in a specific cinema.
   * @param {number} cinemaId - The ID of the cinema.
   * @param {number} roomId - The ID of the room.
   * @param {number} movieId - The ID of the movie.
   * @param {string} showtime - The showtime (e.g., "14:00") for the movie.
   * @returns {Object.<string, string[]>} An object where each key is a row label (e.g., "A", "B") and the value is an array of seat availability statuses ("OCCUPIED" or "FREE").
   */
  getAvailableSeats: (cinemaId, roomId, movieId, showtime) => {
    const cinema = cinemas.find((cinema) => cinema.cinemaId === cinemaId);
    if (!cinema) {
      return;
    }

    const room = cinema.rooms.find((room) => room.roomId === roomId);
    if (!room) {
      return;
    }

    const movie = room.movies.find(
      (movie) => movie.movieId === movieId && movie.startTime === showtime
    );
    if (!movie) {
      return {};
    }

    const result = {};
    const keys = Object.keys(room.seatConfiguration);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      result[key] = [];

      for (let j = 1; j <= room.seatConfiguration[key]; j++) {
        let seat = key + j;
        if (movie.occupiedSeats.includes(seat)) {
          result[key].push("OCCUPIED");
        } else {
          result[key].push("FREE");
        }
      }
    }

    return result;
  },

  /**
   * Books a specific seat for a specific movie at a specific time in a specific cinema.
   * @param {number} cinemaId - The ID of the cinema.
   * @param {number} roomId - The ID of the room.
   * @param {string} showtime - The showtime (e.g., "14:00") for the movie.
   * @param {string} seatId - The ID of the seat to book.
   * @returns {boolean} Returns true if booking was successful, otherwise false.
   */
  bookSeat: (cinemaId, roomId, showtime, seatId) => {
    const cinema = cinemas.find((cinema) => cinema.cinemaId === cinemaId);
    if (!cinema) {
      return false;
    }

    const room = cinema.rooms.find((room) => room.roomId === roomId);
    if (!room) {
      return false;
    }

    const movie = room.movies.find((movie) => movie.startTime === showtime);
    if (!movie) {
      return false;
    }

    const result = {};
    const keys = Object.keys(room.seatConfiguration);

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      result[key] = [];

      for (let j = 1; j <= room.seatConfiguration[key]; j++) {
        let seat = key + j;
        result[key].push(seat);
      }
    }

    let isSeatIsAvailable = Object.values(result).some((item) =>
      item.includes(seatId)
    );
    if (!isSeatIsAvailable) {
      return false;
    }

    if (movie.occupiedSeats.includes(seatId)) {
      return false;
    } else {
      movie.occupiedSeats.push(seatId);
      return true;
    }
  },
  /**
   * Gets the total seating capacity for a specified cinema.
   * @param {number} cinemaId - The ID of the cinema.
   * @returns {number} The total seating capacity of the cinema.
   */
  getCinemaCapacity: (cinemaId) => {
    const cinema = cinemas.find((cinema) => cinema.cinemaId === cinemaId);
    if (!cinema) {
      return 0;
    }

    let totalSeats = 0;

    for (let i = 0; i < cinema.rooms.length; i++) {
      const room = cinema.rooms[i];
      const seats = Object.values(room.seatConfiguration);

      for (let j = 0; j < seats.length; j++) {
        totalSeats += seats[j];
      }
    }

    return totalSeats;
  },
};

cinemaService.getAvailableSeats();
export default cinemaService;
