import { expect } from "chai";
import cinemaService from "../services/cinema.service.js";

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
  });

  describe("getAvailableSeats(cinemaId, movieId, showtime)", () => {
    it("should return an array of available seats for a valid cinema, movie, and showtime", () => {
      const availableSeats = cinemaService.getAvailableSeats(1, 101, "14:00");
      expect(availableSeats).to.be.an("array");
      availableSeats.forEach((seat) => expect(seat).to.be.a("string"));
    });

    it("should return an empty array if no seats are available for a given showtime", () => {
      const availableSeats = cinemaService.getAvailableSeats(
        1,
        101,
        "invalidTime"
      );
      expect(availableSeats).to.be.an("array").that.is.empty;
    });
  });

  describe("bookSeat(cinemaId, movieId, showtime, seatId)", () => {
    it("should book the specified seat if it is available", () => {
      const seatId = "A1";
      const result = cinemaService.bookSeat(1, 101, "14:00", seatId);
      expect(result).to.be.true;

      const availableSeats = cinemaService.getAvailableSeats(1, 101, "14:00");
      expect(availableSeats).to.not.include(seatId);
    });

    it("should return false if the seat is already booked", () => {
      const seatId = "A2"; // Assume A2 is already booked
      const result = cinemaService.bookSeat(1, 101, "14:00", seatId);
      expect(result).to.be.false;
    });
  });

  describe("getCinemaCapacity(cinemaId)", () => {
    it("should return the correct capacity for a valid cinemaId", () => {
      const capacity = cinemaService.getCinemaCapacity(1);
      expect(capacity).to.be.a("number");
      expect(capacity).to.equal(50); // Assume 50 for this test case
    });

    it("should return 0 for an invalid cinemaId", () => {
      const capacity = cinemaService.getCinemaCapacity(999);
      expect(capacity).to.equal(0);
    });
  });
});
