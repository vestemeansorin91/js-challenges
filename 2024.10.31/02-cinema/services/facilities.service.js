import * as facilities from "#root/data/facilities.json" with { type: "json" };

/**
 * @typedef {Object} Facility
 * @property {string} key - The unique key identifier for the facility (e.g., "parking").
 * @property {string} label - The display label for the facility (e.g., "Parcare").
 */

const facilitiesService = {
  /**
   * Retrieves the display label for a given facility key.
   * @param {string} facilityKey - The key identifier of the facility (e.g., "parking").
   * @returns {string|null} The display label of the facility, or null if not found.
   */
  getFacilityLabel: (facilityKey) => {
    /* implementation */
  },

  /**
   * Lists all available facilities.
   * @returns {Facility[]} An array of facilities with their keys and display labels.
   */
  listAllFacilities: () => {
    /* implementation */
  },

  /**
   * Finds all cinemas that have a specific facility.
   * @param {string} facilityKey - The key identifier of the facility (e.g., "parking").
   * @returns {Object[]} An array of cinema objects that include the specified facility.
   */
  findCinemasWithFacility: (facilityKey) => {
    /* implementation */
  },
};

export default facilitiesService;
