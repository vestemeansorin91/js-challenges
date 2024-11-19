import * as cinemasJson from '#root/data/cinemas.json' with { type: 'json' };
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
    let selectedCinema = cinemas.find((cinema) => cinema.cinemaId === cinemaId);
    if (!selectedCinema) {
      return [];
    }

    return selectedCinema.facilities;
  },
  /**
   * Retrieves the screen types available at a specified cinema.
   * @param {number} cinemaId - The ID of the cinema to retrieve screen types from.
   * @returns {string[]} An array of screen types (e.g., "IMAX", "2D") available at the cinema.
   */
  getCinemaScreens: (cinemaId) => {
    let selectedCinema = cinemas.find((cinema) => cinema.cinemaId === cinemaId);
    if (!selectedCinema) {
      return [];
    }

    return selectedCinema.screens;
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
    /* implementation */
  },

  /**
   * Books a specific seat for a specific movie at a specific time in a specific cinema.
   * @param {number} cinemaId - The ID of the cinema.
   * @param {number} movieId - The ID of the movie.
   * @param {string} showtime - The showtime (e.g., "14:00") for the movie.
   * @param {string} seatId - The ID of the seat to book.
   * @returns {boolean} Returns true if booking was successful, otherwise false.
   */
  bookSeat: (cinemaId, movieId, showtime, seatId) => {
    /* implementation */
  },
  /**
   * Gets the total seating capacity for a specified cinema.
   * @param {number} cinemaId - The ID of the cinema.
   * @returns {number} The total seating capacity of the cinema.
   */
  getCinemaCapacity: (cinemaId) => {
    /* implementation */
  },
};

export default cinemaService;
