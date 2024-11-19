import { expect } from "chai";
import facilitiesService from "../services/facilities.service.js";

import * as mockFacilities from '#root/data/facilities.json' with { type: 'json' };
import * as cinemasJson from '#root/data/facilities.json' with { type: 'json' };

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
  });

  describe.only("listAllFacilities()", () => {
    it("should return all facilities with correct labels", () => {
      const facilities = facilitiesService.listAllFacilities();
      expect(facilities).to.deep.equal(mockFacilities);
    });

    it("should return an empty object if no facilities are available", () => {
      const originalFacilities = { ...mockFacilities };
      Object.keys(mockFacilities).forEach((key) => delete mockFacilities[key]);
      const facilities = facilitiesService.listAllFacilities();
      expect(mockFacilities).to.deep.equal({});
      Object.assign(mockFacilities, originalFacilities);
    });
  });

  describe("findCinemasWithFacility(facilityKey)", () => {
    it("should return cinemas with the specified facility", () => {
      const cinemasWithParking =
        facilitiesService.findCinemasWithFacility("parking");
      const expectedCinemas = mockCinemas.filter((cinema) =>
        cinema.facilities.includes("parking"),
      );
      expect(cinemasWithParking)
        .to.be.an("array")
        .that.has.lengthOf(expectedCinemas.length);
      expect(
        cinemasWithParking.map((cinema) => cinema.cinemaId),
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
        cinema.facilities.includes("arcade"),
      );
      expect(cinemasWithArcade)
        .to.be.an("array")
        .that.has.lengthOf(expectedCinemas.length);
      expect(
        cinemasWithArcade.map((cinema) => cinema.cinemaId),
      ).to.include.members(expectedCinemas.map((cinema) => cinema.cinemaId));
    });

    it("should return multiple cinemas with a shared facility", () => {
      const cinemasWithSnacks =
        facilitiesService.findCinemasWithFacility("snacks");
      const expectedCinemas = mockCinemas.filter((cinema) =>
        cinema.facilities.includes("snacks"),
      );
      expect(cinemasWithSnacks)
        .to.be.an("array")
        .that.has.lengthOf(expectedCinemas.length);
      expect(
        cinemasWithSnacks.map((cinema) => cinema.cinemaId),
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
  });
});
