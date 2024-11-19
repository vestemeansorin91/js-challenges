import fs from "fs";

const facilities = JSON.parse(
  fs.readFileSync("./data/facilities.json", "utf-8")
);

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
  getFacilityLabel: (key) => {
    if (!key) {
      return null;
    }
    let lowerCaseFacilitiesObject = {};
    for (const facilityKey of Object.keys(facilities)) {
      lowerCaseFacilitiesObject[facilityKey.toLowerCase()] =
        facilities[facilityKey];
    }

    if (!lowerCaseFacilitiesObject[key.toLowerCase()]) {
      return null;
    }

    return lowerCaseFacilitiesObject[key.toLowerCase()];
  },

  /**
   * Lists all available facilities.
   * @returns {Facility[]} An array of facilities with their keys and display labels.
   */
  listAllFacilities: () => {
    const result = [];
    for (const key of Object.keys(facilities)) {
      result.push({
        key: key,
        label: facilities[key],
      });
    }

    return facilities;
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

facilitiesService.listAllFacilities();
export default facilitiesService;
