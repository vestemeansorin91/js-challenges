import { expect } from 'chai';
import facilitiesService from '../services/facilities.service.js';

// Mock facilities data for testing
const mockFacilities = {
  parking: "Parcare",
  snacks: "Gustări",
  glassesRental3D: "Închiriere ochelari 3D",
  loungeVip: "Lounge VIP",
  arcade: "Arcadă"
};

// Mock cinemas data for testing `findCinemasWithFacility`
const mockCinemas = [
  { cinemaId: 1, name: "Cineplex 21", facilities: ["parking", "snacks", "glassesRental3D"] },
  { cinemaId: 2, name: "Galaxy Cinemas", facilities: ["loungeVip", "arcade", "parking"] },
  { cinemaId: 3, name: "Cinema City Mall", facilities: ["snacks", "parking", "loungeVip"] }
];

describe('Facilities Service Tests', () => {
  
  describe('getFacilityLabel(facilityKey)', () => {
    it('should return the correct label for a valid facility key', () => {
      const label = facilitiesService.getFacilityLabel("parking");
      expect(label).to.equal("Parcare");
    });

    it('should return null for an invalid facility key', () => {
      const label = facilitiesService.getFacilityLabel("invalidKey");
      expect(label).to.be.null;
    });
  });

  describe('listAllFacilities()', () => {
    it('should return all facilities with correct labels', () => {
      const facilities = facilitiesService.listAllFacilities();
      expect(facilities).to.deep.equal(mockFacilities);
    });
  });

  describe('findCinemasWithFacility(facilityKey)', () => {
    it('should return cinemas with the specified facility', () => {
      const cinemasWithParking = facilitiesService.findCinemasWithFacility("parking");
      expect(cinemasWithParking).to.be.an('array').that.has.lengthOf(3);
      expect(cinemasWithParking.map(cinema => cinema.cinemaId)).to.include.members([1, 2, 3]);
    });

    it('should return an empty array if no cinemas have the specified facility', () => {
      const cinemasWithInvalidFacility = facilitiesService.findCinemasWithFacility("nonExistentFacility");
      expect(cinemasWithInvalidFacility).to.be.an('array').that.is.empty;
    });
  });

});
