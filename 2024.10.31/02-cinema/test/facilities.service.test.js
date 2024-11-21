import { expect } from "chai";
import facilitiesService from "../services/facilities.service.js";

import * as mockFacilities from "#root/data/facilities.json" with { type: "json" };
import * as cinemasJson from "#root/data/cinemas.json" with { type: "json" };

const mockCinemas = cinemasJson.cinemas;

describe("Facilities Service Tests", () => {
  describe("getFacilityLabel(facilityKey)", () => {
    it("should return the correct label for a valid facility key", () => {
      const label = facilitiesService.getFacilityLabel("parking");
      expect(label).to.equal(mockFacilities.parking);
    });

    it("should return null for an invalid facility key", () => {
      const label = facilitiesService.getFacilityLabel("invalidKey");
      expect(label).to.be.null;
    });

    it("should handle case insensitivity for facility keys", () => {
      const label = facilitiesService.getFacilityLabel("Parking");
      expect(label).to.equal(mockFacilities.parking);
    });

    it("should return null if facility key is undefined", () => {
      const label = facilitiesService.getFacilityLabel(undefined);
      expect(label).to.be.null;
    });

    it("should return null if facility key is null", () => {
      const label = facilitiesService.getFacilityLabel(null);
      expect(label).to.be.null;
    });
  });

  describe("findCinemasWithFacility(facilityKey)", () => {
    it("should return cinemas with the specified facility", () => {
      const cinemasWithParking =
        facilitiesService.findCinemasWithFacility("parking");
      const expectedCinemas = mockCinemas.filter((cinema) =>
        cinema.facilities.includes("parking")
      );
      expect(cinemasWithParking)
        .to.be.an("array")
        .that.has.lengthOf(expectedCinemas.length);
      expect(
        cinemasWithParking.map((cinema) => cinema.cinemaId)
      ).to.include.members(expectedCinemas.map((cinema) => cinema.cinemaId));
    });

    it("should return an empty array if no cinemas have the specified facility", () => {
      const cinemasWithInvalidFacility =
        facilitiesService.findCinemasWithFacility("nonExistentFacility");
      expect(cinemasWithInvalidFacility).to.be.an("array").that.is.empty;
    });

    it("should handle case insensitivity for facility keys", () => {
      const cinemasWithArcade =
        facilitiesService.findCinemasWithFacility("Arcade");
      const expectedCinemas = mockCinemas.filter((cinema) =>
        cinema.facilities.includes("arcade")
      );
      expect(cinemasWithArcade)
        .to.be.an("array")
        .that.has.lengthOf(expectedCinemas.length);
      expect(
        cinemasWithArcade.map((cinema) => cinema.cinemaId)
      ).to.include.members(expectedCinemas.map((cinema) => cinema.cinemaId));
    });

    it("should return multiple cinemas with a shared facility", () => {
      const cinemasWithSnacks =
        facilitiesService.findCinemasWithFacility("snacks");
      const expectedCinemas = mockCinemas.filter((cinema) =>
        cinema.facilities.includes("snacks")
      );
      expect(cinemasWithSnacks)
        .to.be.an("array")
        .that.has.lengthOf(expectedCinemas.length);
      expect(
        cinemasWithSnacks.map((cinema) => cinema.cinemaId)
      ).to.include.members(expectedCinemas.map((cinema) => cinema.cinemaId));
    });

    it("should return no cinemas if facility data is unavailable", () => {
      const originalMockCinemas = JSON.parse(JSON.stringify(mockCinemas));
      mockCinemas.forEach((cinema) => (cinema.facilities = []));
      const cinemasWithParking =
        facilitiesService.findCinemasWithFacility("parking");
      expect(cinemasWithParking).to.be.an("array").that.is.empty;
      Object.assign(mockCinemas, originalMockCinemas);
    });

    it("should return an empty array if facility key is undefined", () => {
      const cinemas = facilitiesService.findCinemasWithFacility(undefined);
      expect(cinemas).to.be.an("array").that.is.empty;
    });

    it("should return an empty array if facility key is null", () => {
      const cinemas = facilitiesService.findCinemasWithFacility(null);
      expect(cinemas).to.be.an("array").that.is.empty;
    });
  });

  describe("listAllFacilities()", () => {
    it("should return all available facilities", () => {
      const facilitiesList = facilitiesService.listAllFacilities();
      const expectedFacilities = Object.entries(mockFacilities).map(
        ([key, label]) => ({ key, label })
      );
      expect(facilitiesList).to.deep.equal(expectedFacilities);
    });

    it("should return an empty array if facilities data is missing", () => {
      const originalFacilities = JSON.parse(JSON.stringify(mockFacilities));
      Object.keys(mockFacilities).forEach((key) => delete mockFacilities[key]);
      const facilitiesList = facilitiesService.listAllFacilities();
      expect(facilitiesList).to.be.an("array").that.is.empty;
      Object.assign(mockFacilities, originalFacilities);
    });
  });
});
