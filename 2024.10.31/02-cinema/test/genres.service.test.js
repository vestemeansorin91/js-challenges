import { expect } from 'chai';
import genresService from '../services/genres.service.js';

const mockGenres = {
  sciFi: "Sci-Fi",
  adventure: "Aventură",
  romance: "Romantic",
  comedy: "Comedie",
  action: "Acțiune",
  thriller: "Thriller",
  mystery: "Mister",
  drama: "Dramă",
  horror: "Horror",
  fantasy: "Fantezie",
  crime: "Polițist",
  historical: "Istoric"
};

const mockMovies = [
  { movieId: 1, title: "Călătorul în timp", genres: ["sciFi", "adventure"] },
  { movieId: 2, title: "Escapada romantică", genres: ["romance", "comedy"] },
  { movieId: 3, title: "Eroii acțiunii", genres: ["action", "thriller"] },
  { movieId: 4, title: "Noaptea misterelor", genres: ["mystery", "drama"] },
  { movieId: 5, title: "Odiseea spațială", genres: ["sciFi", "adventure"] },
];

describe('Genres Service Tests', () => {

  describe('getGenreLabel(genreKey)', () => {
    it('should return the correct label for a valid genre key', () => {
      const label = genresService.getGenreLabel("sciFi");
      expect(label).to.equal("Sci-Fi");
    });

    it('should return null for an invalid genre key', () => {
      const label = genresService.getGenreLabel("invalidKey");
      expect(label).to.be.null;
    });
  });

  describe('listAllGenres()', () => {
    it('should return all genres with correct labels', () => {
      const genres = genresService.listAllGenres();
      expect(genres).to.deep.equal(mockGenres);
    });
  });

  describe('findMoviesByGenre(genreKey)', () => {
    it('should return movies with the specified genre', () => {
      const sciFiMovies = genresService.findMoviesByGenre("sciFi");
      expect(sciFiMovies).to.be.an('array').that.has.lengthOf(2);
      expect(sciFiMovies.map(movie => movie.movieId)).to.include.members([1, 5]);
    });

    it('should return an empty array if no movies have the specified genre', () => {
      const moviesWithInvalidGenre = genresService.findMoviesByGenre("nonExistentGenre");
      expect(moviesWithInvalidGenre).to.be.an('array').that.is.empty;
    });
  });
});
