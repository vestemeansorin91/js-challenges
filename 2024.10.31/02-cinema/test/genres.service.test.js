import { expect } from "chai";
import fs from "fs";
import genresService from "../services/genres.service.js";

const mockGenres = JSON.parse(fs.readFileSync("./data/genres.json", "utf-8"));
const mockMovies = JSON.parse(
  fs.readFileSync("./data/movies.json", "utf-8"),
).movies;

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
  });

  describe("listAllGenres()", () => {
    it("should return all genres with correct labels", () => {
      const genres = genresService.listAllGenres();
      expect(genres).to.deep.equal(mockGenres);
    });

    it("should return an empty object if there are no genres", () => {
      const originalGenres = { ...mockGenres };
      Object.keys(mockGenres).forEach((key) => delete mockGenres[key]);
      const genres = genresService.listAllGenres();
      expect(genres).to.deep.equal({});
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

    it("should return an empty array if the genre data is unavailable", () => {
      const originalMovies = [...mockMovies];
      mockMovies.forEach((movie) => (movie.genres = []));
      const sciFiMovies = genresService.findMoviesByGenre("sciFi");
      expect(sciFiMovies).to.be.an("array").that.is.empty;
      mockMovies.splice(0, mockMovies.length, ...originalMovies);
    });
  });
});
