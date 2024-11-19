import { expect } from "chai";
import moviesService from "#root/services/movies.service.js";

import * as mockMoviesData from "#root/data/movies.json" with { type: "json" };
import * as mockCinemasData from "#root/data/cinemas.json" with { type: "json" };

const mockMovies = mockMoviesData.movies;
const mockCinemas = mockCinemasData.cinemas;

describe("Movies Service Tests", () => {
  describe("findMovieById(movieId)", () => {
    it("should return the correct movie for a valid movieId", () => {
      const movie = moviesService.findMovieById(1);
      expect(movie).to.be.an("object");
      expect(movie).to.have.property("movieId", 1);
      expect(movie).to.have.property("title", "Călătorul în timp");
    });

    it("should return null for an invalid movieId", () => {
      const movie = moviesService.findMovieById(999);
      expect(movie).to.be.null;
    });

    it("should handle edge cases like negative movieId", () => {
      const movie = moviesService.findMovieById(-1);
      expect(movie).to.be.null;
    });
  });

  describe("listMoviesByGenre(genreKey)", () => {
    it("should return movies with the specified genre", () => {
      const sciFiMovies = moviesService.listMoviesByGenre("sciFi");
      expect(sciFiMovies).to.be.an("array").that.has.lengthOf(2);
      expect(sciFiMovies.map((movie) => movie.movieId)).to.include.members([1, 5]);
    });

    it("should return an empty array if no movies have the specified genre", () => {
      const noGenreMovies = moviesService.listMoviesByGenre("nonExistentGenre");
      expect(noGenreMovies).to.be.an("array").that.is.empty;
    });

    it("should handle case insensitivity for genre keys", () => {
      const adventureMovies = moviesService.listMoviesByGenre("Adventure");
      expect(adventureMovies).to.be.an("array").that.has.lengthOf(2);
      expect(adventureMovies.map((movie) => movie.movieId)).to.include.members([1, 5]);
    });

    it("should return an empty array if genreKey is undefined", () => {
      const movies = moviesService.listMoviesByGenre(undefined);
      expect(movies).to.be.an("array").that.is.empty;
    });
  });

  describe("listMoviesByCinema(cinemaId)", () => {
    it("should return movies available at the specified cinema", () => {
      const movies = moviesService.listMoviesByCinema(1);
      const expectedMovieIds = [1, 3, 2, 5]; // Movies in Cinema 1
      expect(movies).to.be.an("array").that.has.length(expectedMovieIds.length);
      expect(movies.map((movie) => movie.movieId)).to.include.members(expectedMovieIds);
    });

    it("should return an empty array if no movies are available at the specified cinema", () => {
      const movies = moviesService.listMoviesByCinema(999);
      expect(movies).to.be.an("array").that.is.empty;
    });

    it("should return an empty array if the cinema has no movies scheduled", () => {
      const movies = moviesService.listMoviesByCinema(4);
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
      const showtimes = moviesService.listShowtimes(1, 9); // Movie 9 not in Cinema 1
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
      expect(occupiedSeats).to.be.an("array").that.includes.members(["A2", "A3"]);
    });

    it("should return an empty array if no seats are occupied for the specified showtime", () => {
      const occupiedSeats = moviesService.getOccupiedSeats(1, 1, "17:00");
      expect(occupiedSeats).to.be.an("array").that.is.empty;
    });

    it("should return an empty array for an invalid cinema, movie, or showtime", () => {
      const occupiedSeats = moviesService.getOccupiedSeats(999, 1, "14:00");
      expect(occupiedSeats).to.be.an("array").that.is.empty;
    });
  });
});
