/**
 * @typedef {Object} Movie
 * @property {number} movieId - The unique identifier for the movie.
 * @property {string} title - The title of the movie.
 * @property {string[]} genres - The genres associated with the movie.
 * @property {number} duration - The duration of the movie in minutes.
 */

const moviesService = {
  /**
   * Finds a movie by its ID.
   * @param {number} movieId - The unique identifier of the movie.
   * @returns {Movie|null} The movie object if found, otherwise null.
   */
  findMovieById: (movieId) => {
    /* implementation */
  },

  /**
   * Lists all movies within a specified genre.
   * @param {string} genreKey - The key identifier of the genre (e.g., "sciFi").
   * @returns {Movie[]} An array of movie objects that match the specified genre.
   */
  listMoviesByGenre: (genreKey) => {
    /* implementation */
  },

  /**
   * Lists all movies available at a specific cinema.
   * @param {number} cinemaId - The unique identifier of the cinema.
   * @returns {Movie[]} An array of movie objects available at the specified cinema.
   */
  listMoviesByCinema: (cinemaId) => {
    /* implementation */
  },

  /**
   * Gets the duration of a specified movie.
   * @param {number} movieId - The unique identifier of the movie.
   * @returns {number|null} The duration of the movie in minutes, or null if not found.
   */
  getMovieDuration: (movieId) => {
    /* implementation */
  },

  /**
   * Lists all showtimes for a specific movie in a specific cinema.
   * @param {number} cinemaId - The unique identifier of the cinema.
   * @param {number} movieId - The unique identifier of the movie.
   * @returns {string[]} An array of showtimes in "HH:MM" format.
   */
  listShowtimes: (cinemaId, movieId) => {
    /* implementation */
  },

  /**
   * Retrieves the genres associated with a specific movie.
   * @param {number} movieId - The unique identifier of the movie.
   * @returns {string[]} An array of genre keys associated with the movie.
   */
  getMovieGenres: (movieId) => {
    /* implementation */
  },

  /**
   * Retrieves occupied seats for a specific movie and showtime in a specific cinema.
   * @param {number} cinemaId - The unique identifier of the cinema.
   * @param {number} movieId - The unique identifier of the movie.
   * @param {string} showtime - The showtime in "HH:MM" format.
   * @returns {string[]} An array of seat IDs that are currently occupied for the showtime.
   */
  getOccupiedSeats: (cinemaId, movieId, showtime) => {
    /* implementation */
  },
};

export default moviesService;
