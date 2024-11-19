import { expect } from "chai";
import cinemaService from "#root/services/cinema.service.js";

describe("Cinema Service Tests", () => {
  describe("findCinemaById(cinemaId)", () => {
    it("should return the correct cinema for a valid cinemaId", () => {
      const cinema = cinemaService.findCinemaById(1);
      expect(cinema).to.be.an("object");
      expect(cinema).to.have.property("cinemaId", 1);
    });

    it("should return null for an invalid cinemaId", () => {
      const cinema = cinemaService.findCinemaById(999);
      expect(cinema).to.be.null;
    });
  });

  describe("listCinemasByLocation(location)", () => {
    it("should return an array of cinemas in the specified location", () => {
      const cinemas = cinemaService.listCinemasByLocation("Centru");
      expect(cinemas).to.be.an("array");
      cinemas.forEach((cinema) =>
        expect(cinema).to.have.property("location", "Centru")
      );
    });

    it("should return an empty array if no cinemas are in the specified location", () => {
      const cinemas = cinemaService.listCinemasByLocation("UnknownLocation");
      expect(cinemas).to.be.an("array").that.is.empty;
    });

    it("should be case-insensitive for location search", () => {
      const cinemas = cinemaService.listCinemasByLocation("centru");
      expect(cinemas).to.be.an("array");
      cinemas.forEach((cinema) =>
        expect(cinema).to.have.property("location", "Centru")
      );
    });
  });

  describe("getCinemaFacilities(cinemaId)", () => {
    it("should return an array of facilities for a valid cinemaId", () => {
      const facilities = cinemaService.getCinemaFacilities(1);
      expect(facilities).to.be.an("array");
      expect(facilities).to.include.members([
        "parking",
        "snacks",
        "glassesRental3D",
      ]);
    });

    it("should return an empty array for an invalid cinemaId", () => {
      const facilities = cinemaService.getCinemaFacilities(999);
      expect(facilities).to.be.an("array").that.is.empty;
    });

    it("should return an empty array if cinema has no facilities listed", () => {
      const facilities = cinemaService.getCinemaFacilities(7);
      expect(facilities).to.be.an("array").that.is.empty;
    });
  });

  describe("getCinemaScreens(cinemaId)", () => {
    it("should return an array of screens for a valid cinemaId", () => {
      const screens = cinemaService.getCinemaScreens(1);
      expect(screens).to.be.an("array");
      expect(screens).to.include.members(["IMAX", "Standard"]);
    });

    it("should return an empty array for an invalid cinemaId", () => {
      const screens = cinemaService.getCinemaScreens(999);
      expect(screens).to.be.an("array").that.is.empty;
    });

    it("should return an empty array if cinema has no screens", () => {
      // Assuming cinemaId 8 exists but has no screens listed
      const screens = cinemaService.getCinemaScreens(8);
      expect(screens).to.be.an("array").that.is.empty;
    });
  });

  describe("getAvailableSeats(cinemaId, roomId, movieId, showtime)", () => {
    it("should return seat availability in the correct format", () => {
      const availableSeats = cinemaService.getAvailableSeats(1, 1, 1, "14:00");
      expect(availableSeats).to.be.an("object");
      expect(availableSeats).to.have.all.keys("A", "B", "C", "D");

      // Sample checks for seat rows
      expect(availableSeats.A)
        .to.be.an("array")
        .that.includes.members(["OCCUPIED", "FREE"]);
      expect(availableSeats.B)
        .to.be.an("array")
        .that.includes.members(["FREE", "OCCUPIED"]);
    });

    it("should return an empty object if no seats are configured for the specified movie and showtime", () => {
      const availableSeats = cinemaService.getAvailableSeats(
        1,
        1,
        1,
        "invalidTime"
      );
      expect(availableSeats).to.deep.equal({});
    });
  });

  describe("bookSeat(cinemaId, roomId, showtime, seatId)", () => {
    it("should return false if the seat is already booked", () => {
      const seatId = "A2";
      const result = cinemaService.bookSeat(1, 101, "14:00", seatId);
      expect(result).to.be.false;
    });

    it("should return false if the specified showtime does not exist", () => {
      const seatId = "A3";
      const result = cinemaService.bookSeat(1, 101, "invalidTime", seatId);
      expect(result).to.be.false;
    });
  });

  describe("getCinemaCapacity(cinemaId)", () => {
    it("should return the correct capacity for a valid cinemaId", () => {
      const capacity = cinemaService.getCinemaCapacity(1);
      expect(capacity).to.be.a("number");
      expect(capacity).to.equal(90);
    });

    it("should return 0 for an invalid cinemaId", () => {
      const capacity = cinemaService.getCinemaCapacity(999);
      expect(capacity).to.equal(0);
    });

    it("should return the sum of capacities of all rooms in a cinema", () => {
      const capacity = cinemaService.getCinemaCapacity(2);
      expect(capacity).to.equal(40);
    });
  });
});
