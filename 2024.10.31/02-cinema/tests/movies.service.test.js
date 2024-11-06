import { expect } from 'chai';
import moviesService from '../services/movies.service.js';

// Mock movies data for testing
const mockMovies = [
  { movieId: 1, title: "Călătorul în timp", genres: ["sciFi", "adventure"], duration: 120 },
  { movieId: 2, title: "Escapada romantică", genres: ["romance", "comedy"], duration: 105 },
  { movieId: 3, title: "Eroii acțiunii", genres: ["action", "thriller"], duration: 130 },
  { movieId: 4, title: "Noaptea misterelor", genres: ["mystery", "drama"], duration: 115 },
  { movieId: 5, title: "Odiseea spațială", genres: ["sciFi", "adventure"], duration: 140 },
];

// Mock cinemas data with showtimes and occupied seats
const mockCinemas = [
  { 
    cinemaId: 1, 
    name: "Cineplex 21", 
    movies: [
      { movieId: 1, showtimes: ["14:00", "17:00"], occupiedSeats: { "14:00": ["A1", "A2"], "17:00": ["B1", "B2"] } },
      { movieId: 2, showtimes: ["13:00", "15:30"], occupiedSeats: { "13:00": ["A3"], "15:30": ["C4"] } }
    ]
  }
];

describe('Movies Service Tests', () => {

  describe('findMovieById(movieId)', () => {
    it('should return the correct movie for a valid movieId', () => {
      const movie = moviesService.findMovieById(1);
      expect(movie).to.be.an('object');
      expect(movie).to.have.property('movieId', 1);
    });

    it('should return null for an invalid movieId', () => {
      const movie = moviesService.findMovieById(999);
      expect(movie).to.be.null;
    });
  });

  describe('listMoviesByGenre(genreKey)', () => {
    it('should return movies with the specified genre', () => {
      const sciFiMovies = moviesService.listMoviesByGenre("sciFi");
      expect(sciFiMovies).to.be.an('array').that.has.lengthOf(2);
      expect(sciFiMovies.map(movie => movie.movieId)).to.include.members([1, 5]);
    });

    it('should return an empty array if no movies have the specified genre', () => {
      const noGenreMovies = moviesService.listMoviesByGenre("nonExistentGenre");
      expect(noGenreMovies).to.be.an('array').that.is.empty;
    });
  });

  describe('listMoviesByCinema(cinemaId)', () => {
    it('should return movies available at the specified cinema', () => {
      const movies = moviesService.listMoviesByCinema(1);
      expect(movies).to.be.an('array').that.has.lengthOf(2);
      expect(movies.map(movie => movie.movieId)).to.include.members([1, 2]);
    });

    it('should return an empty array if no movies are available at the specified cinema', () => {
      const movies = moviesService.listMoviesByCinema(999);
      expect(movies).to.be.an('array').that.is.empty;
    });
  });

  describe('getMovieDuration(movieId)', () => {
    it('should return the correct duration for a valid movieId', () => {
      const duration = moviesService.getMovieDuration(1);
      expect(duration).to.equal(120);
    });

    it('should return null for an invalid movieId', () => {
      const duration = moviesService.getMovieDuration(999);
      expect(duration).to.be.null;
    });
  });

  describe('listShowtimes(cinemaId, movieId)', () => {
    it('should return the list of showtimes for a valid cinema and movie', () => {
      const showtimes = moviesService.listShowtimes(1, 1);
      expect(showtimes).to.be.an('array').that.has.lengthOf(2);
      expect(showtimes).to.include.members(["14:00", "17:00"]);
    });

    it('should return an empty array for an invalid cinema or movie', () => {
      const showtimes = moviesService.listShowtimes(999, 1);
      expect(showtimes).to.be.an('array').that.is.empty;
    });
  });

  describe('getMovieGenres(movieId)', () => {
    it('should return an array of genres for a valid movieId', () => {
      const genres = moviesService.getMovieGenres(1);
      expect(genres).to.be.an('array').that.includes("sciFi", "adventure");
    });

    it('should return an empty array for an invalid movieId', () => {
      const genres = moviesService.getMovieGenres(999);
      expect(genres).to.be.an('array').that.is.empty;
    });
  });

  describe('getOccupiedSeats(cinemaId, movieId, showtime)', () => {
    it('should return an array of occupied seats for a valid cinema, movie, and showtime', () => {
      const occupiedSeats = moviesService.getOccupiedSeats(1, 1, "14:00");
      expect(occupiedSeats).to.be.an('array').that.includes("A1", "A2");
    });

    it('should return an empty array if no seats are occupied for the specified showtime', () => {
      const occupiedSeats = moviesService.getOccupiedSeats(1, 1, "invalidTime");
      expect(occupiedSeats).to.be.an('array').that.is.empty;
    });
  });

});
