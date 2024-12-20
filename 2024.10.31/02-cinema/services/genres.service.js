import * as genres from "#root/data/genres.json" with { type: "json" };
import * as moviesData from "#root/data/movies.json" with { type: "json" };

/**
 * @typedef {Object} Genre
 * @property {string} key - The unique key identifier for the genre (e.g., "sciFi").
 * @property {string} label - The display label for the genre (e.g., "Sci-Fi").
 */
const genresService = {
  /**
   * Retrieves the display label for a given genre key.
   * @param {string} genreKey - The key identifier of the genre (e.g., "sciFi").
   * @returns {string|null} The display label of the genre, or null if not found.
   */
  getGenreLabel: (genreKey) => {
    /* implementation */
  },

  /**
   * Lists all available genres.
   * @returns {Genre[]} An array of genres with their keys and display labels.
   */
  listAllGenres: () => {
    /* implementation */
  },

  /**
   * Finds all movies that belong to a specific genre.
   * @param {string} genreKey - The key identifier of the genre (e.g., "sciFi").
   * @returns {Object[]} An array of movie objects that match the specified genre.
   */
  findMoviesByGenre: (genreKey) => {
    /* implementation */
  },
};

export default genresService;
