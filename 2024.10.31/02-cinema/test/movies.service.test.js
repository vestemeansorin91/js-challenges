import { expect } from "chai";
import moviesService from "../services/movies.service.js";

describe("Movies Service Tests", () => {
  describe("findMovieById(movieId)", () => {
    it("should return the correct movie for a valid movieId", () => {
      const movie = moviesService.findMovieById(1);
      expect(movie).to.be.an("object");
      expect(movie).to.have.property("movieId", 1);
    });

    it("should return null for an invalid movieId", () => {
      const movie = moviesService.findMovieById(999);
      expect(movie).to.be.null;
    });
  });

  describe("listMoviesByGenre(genreKey)", () => {
    it("should return movies with the specified genre", () => {
      const sciFiMovies = moviesService.listMoviesByGenre("sciFi");
      expect(sciFiMovies).to.be.an("array").that.has.lengthOf(2);
      expect(sciFiMovies.map((movie) => movie.movieId)).to.include.members([
        1, 5,
      ]);
    });

    it("should return an empty array if no movies have the specified genre", () => {
      const noGenreMovies = moviesService.listMoviesByGenre("nonExistentGenre");
      expect(noGenreMovies).to.be.an("array").that.is.empty;
    });

    it("should handle case insensitivity for genre keys", () => {
      const adventureMovies = moviesService.listMoviesByGenre("Adventure");
      expect(adventureMovies).to.be.an("array").that.has.lengthOf(2);
      expect(adventureMovies.map((movie) => movie.movieId)).to.include.members([
        1, 5,
      ]);
    });
  });

  describe("listMoviesByCinema(cinemaId)", () => {
    it("should return movies available at the specified cinema", () => {
      const movies = moviesService.listMoviesByCinema(1);
      expect(movies).to.be.an("array").that.has.lengthOf(2);
      expect(movies.map((movie) => movie.movieId)).to.include.members([1, 2]);
    });

    it("should return an empty array if no movies are available at the specified cinema", () => {
      const movies = moviesService.listMoviesByCinema(999);
      expect(movies).to.be.an("array").that.is.empty;
    });

    it("should return an empty array if the cinema has no movies scheduled", () => {
      const movies = moviesService.listMoviesByCinema(3);
      expect(movies).to.be.an("array").that.is.empty;
    });
  });

  describe("getMovieDuration(movieId)", () => {
    it("should return the correct duration for a valid movieId", () => {
      const duration = moviesService.getMovieDuration(1);
      expect(duration).to.equal(120);
    });

    it("should return null for an invalid movieId", () => {
      const duration = moviesService.getMovieDuration(999);
      expect(duration).to.be.null;
    });
  });

  describe("listShowtimes(cinemaId, movieId)", () => {
    it("should return the list of showtimes for a valid cinema and movie", () => {
      const showtimes = moviesService.listShowtimes(1, 1);
      expect(showtimes).to.be.an("array").that.has.lengthOf(2);
      expect(showtimes).to.include.members(["14:00", "17:00"]);
    });

    it("should return an empty array for an invalid cinema or movie", () => {
      const showtimes = moviesService.listShowtimes(999, 1);
      expect(showtimes).to.be.an("array").that.is.empty;
    });

    it("should return an empty array if there are no showtimes for the specified movie", () => {
      const showtimes = moviesService.listShowtimes(1, 3);
      expect(showtimes).to.be.an("array").that.is.empty;
    });
  });

  describe("getMovieGenres(movieId)", () => {
    it("should return an array of genres for a valid movieId", () => {
      const genres = moviesService.getMovieGenres(1);
      expect(genres).to.be.an("array").that.includes("sciFi", "adventure");
    });

    it("should return an empty array for an invalid movieId", () => {
      const genres = moviesService.getMovieGenres(999);
      expect(genres).to.be.an("array").that.is.empty;
    });
  });

  describe("getOccupiedSeats(cinemaId, movieId, showtime)", () => {
    it("should return an array of occupied seats for a valid cinema, movie, and showtime", () => {
      const occupiedSeats = moviesService.getOccupiedSeats(1, 1, "14:00");
      expect(occupiedSeats).to.be.an("array").that.includes("A1", "A2");
    });

    it("should return an empty array if no seats are occupied for the specified showtime", () => {
      const occupiedSeats = moviesService.getOccupiedSeats(1, 1, "invalidTime");
      expect(occupiedSeats).to.be.an("array").that.is.empty;
    });

    it("should return an empty array if there are no occupied seats for a valid showtime", () => {
      const occupiedSeats = moviesService.getOccupiedSeats(1, 2, "15:30");
      expect(occupiedSeats).to.be.an("array").that.is.empty;
    });

    it("should handle case where movie has no seating information for a valid showtime", () => {
      const occupiedSeats = moviesService.getOccupiedSeats(1, 3, "13:00");
      expect(occupiedSeats).to.be.an("array").that.is.empty;
    });
  });
});
