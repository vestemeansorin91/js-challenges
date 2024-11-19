import { expect } from "chai";
import genresService from "#root/services/genres.service.js";
import * as mockGenres from "#root/data/genres.json" with { type: "json" };
import * as mockMoviesData from "#root/data/movies.json" with { type: "json" };

const mockMovies = mockMoviesData.movies;

describe("Genres Service Tests", () => {
  describe("getGenreLabel(genreKey)", () => {
    it("should return the correct label for a valid genre key", () => {
      const label = genresService.getGenreLabel("sciFi");
      expect(label).to.equal(mockGenres.sciFi);
    });

    it("should return null for an invalid genre key", () => {
      const label = genresService.getGenreLabel("invalidKey");
      expect(label).to.be.null;
    });

    it("should handle case insensitivity for genre keys", () => {
      const label = genresService.getGenreLabel("SciFi");
      expect(label).to.equal(mockGenres.sciFi);
    });

    it("should return null if the genre key is undefined", () => {
      const label = genresService.getGenreLabel(undefined);
      expect(label).to.be.null;
    });

    it("should return null if the genre key is null", () => {
      const label = genresService.getGenreLabel(null);
      expect(label).to.be.null;
    });
  });

  describe("listAllGenres()", () => {
    it("should return all genres with correct keys and labels", () => {
      const genres = genresService.listAllGenres();
      const expectedGenres = Object.entries(mockGenres).map(([key, label]) => ({
        key,
        label,
      }));
      expect(genres).to.deep.equal(expectedGenres);
    });

    it("should return an empty array if no genres exist", () => {
      const originalGenres = { ...mockGenres };
      Object.keys(mockGenres).forEach((key) => delete mockGenres[key]);
      const genres = genresService.listAllGenres();
      expect(genres).to.be.an("array").that.is.empty;
      Object.assign(mockGenres, originalGenres);
    });
  });

  describe("findMoviesByGenre(genreKey)", () => {
    it("should return movies with the specified genre", () => {
      const sciFiMovies = genresService.findMoviesByGenre("sciFi");
      const expectedMovies = mockMovies.filter((movie) =>
        movie.genres.includes("sciFi"),
      );
      expect(sciFiMovies)
        .to.be.an("array")
        .that.has.lengthOf(expectedMovies.length);
      expect(sciFiMovies.map((movie) => movie.movieId)).to.include.members(
        expectedMovies.map((movie) => movie.movieId),
      );
    });

    it("should return an empty array if no movies have the specified genre", () => {
      const moviesWithInvalidGenre =
        genresService.findMoviesByGenre("nonExistentGenre");
      expect(moviesWithInvalidGenre).to.be.an("array").that.is.empty;
    });

    it("should handle case insensitivity for genre keys", () => {
      const adventureMovies = genresService.findMoviesByGenre("Adventure");
      const expectedMovies = mockMovies.filter((movie) =>
        movie.genres.includes("adventure"),
      );
      expect(adventureMovies)
        .to.be.an("array")
        .that.has.lengthOf(expectedMovies.length);
      expect(adventureMovies.map((movie) => movie.movieId)).to.include.members(
        expectedMovies.map((movie) => movie.movieId),
      );
    });

    it("should return multiple movies when genre is shared among them", () => {
      const adventureMovies = genresService.findMoviesByGenre("adventure");
      const expectedMovies = mockMovies.filter((movie) =>
        movie.genres.includes("adventure"),
      );
      expect(adventureMovies)
        .to.be.an("array")
        .that.has.lengthOf(expectedMovies.length);
      expect(adventureMovies.map((movie) => movie.movieId)).to.include.members(
        expectedMovies.map((movie) => movie.movieId),
      );
    });

    it("should return an empty array if genre data is unavailable", () => {
      const originalMovies = [...mockMovies];
      mockMovies.forEach((movie) => (movie.genres = []));
      const sciFiMovies = genresService.findMoviesByGenre("sciFi");
      expect(sciFiMovies).to.be.an("array").that.is.empty;
      mockMovies.splice(0, mockMovies.length, ...originalMovies);
    });

    it("should return an empty array if the genre key is undefined", () => {
      const movies = genresService.findMoviesByGenre(undefined);
      expect(movies).to.be.an("array").that.is.empty;
    });

    it("should return an empty array if the genre key is null", () => {
      const movies = genresService.findMoviesByGenre(null);
      expect(movies).to.be.an("array").that.is.empty;
    });
  });
});
