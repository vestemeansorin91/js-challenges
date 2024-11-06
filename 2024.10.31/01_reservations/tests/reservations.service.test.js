import { expect } from 'chai';
import reservationsService from '../reservationsService.js';

describe('Reservations Service Tests', () => {
  beforeEach(() => {
    reservationsService.resetReservations();
  });

  describe('createReservation(date, startHour, endHour, range)', () => {
    it('should create a new reservation and return the full reservation object', () => {
      const reservation = reservationsService.createReservation('2024-10-31', 6, 9, 15);
      expect(reservation).to.deep.equal({
        id: 1,
        date: '2024-10-31',
        categories: [],
        startHour: 6,
        endHour: 9,
        range: 15
      });
    });
  });

  describe('updateReservationDate(reservationId, { date, startHour, endHour, range })', () => {
    it('should update a reservation and return the updated reservation object', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      const updatedReservation = reservationsService.updateReservationDate(1, { date: '2024-11-02', startHour: 8 });
      expect(updatedReservation).to.deep.equal({
        id: 1,
        date: '2024-11-02',
        categories: [],
        startHour: 8,
        endHour: 9,
        range: 15
      });
    });
  });

  describe('deleteReservation(reservationId)', () => {
    it('should delete a reservation and confirm deletion', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      const result = reservationsService.deleteReservation(1);
      expect(result).to.be.true;
      const deletedReservation = reservationsService.findReservationById(1);
      expect(deletedReservation).to.be.null;
    });
  });

  describe('createCategory(reservationId, title)', () => {
    it('should create a new category and return the full reservation object', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      const reservation = reservationsService.createCategory(1, 'Fotbal');
      expect(reservation).to.deep.equal({
        id: 1,
        date: '2024-10-31',
        categories: [
          {
            id: 1,
            title: 'Fotbal',
            fields: []
          }
        ],
        startHour: 6,
        endHour: 9,
        range: 15
      });
    });
  });

  describe('updateCategory(reservationId, categoryId, title)', () => {
    it('should update a category title and return the full reservation object', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      const reservation = reservationsService.updateCategory(1, 1, 'Squash');
      expect(reservation).to.deep.equal({
        id: 1,
        date: '2024-10-31',
        categories: [
          {
            id: 1,
            title: 'Squash',
            fields: []
          }
        ],
        startHour: 6,
        endHour: 9,
        range: 15
      });
    });
  });

  describe('deleteCategory(reservationId, categoryId)', () => {
    it('should delete a category and return true', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      const result = reservationsService.deleteCategory(1, 1);
      expect(result).to.be.true;
      const reservation = reservationsService.findReservationById(1);
      expect(reservation.categories).to.have.lengthOf(0);
    });
  });

  describe('createField(reservationId, categoryId)', () => {
    it('should create a field within a category and return the full reservation object', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      const reservation = reservationsService.createField(1, 1);
      expect(reservation).to.deep.equal({
        id: 1,
        date: '2024-10-31',
        categories: [
          {
            id: 1,
            title: 'Fotbal',
            fields: [
              {
                id: 1,
                occupiedSlots: []
              }
            ]
          }
        ],
        startHour: 6,
        endHour: 9,
        range: 15
      });
    });
  });

  describe('deleteField(reservationId, categoryId, fieldId)', () => {
    it('should delete a field from a category and confirm deletion', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      reservationsService.createField(1, 1);
      const result = reservationsService.deleteField(1, 1, 1);
      expect(result).to.be.true;
      const reservation = reservationsService.findReservationById(1);
      expect(reservation.categories[0].fields).to.have.lengthOf(0);
    });
  });

  describe('createTimeField(reservationId, categoryId, fieldId, startTime, duration)', () => {
    it('should create a time slot within a field and log the creation message', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      reservationsService.createField(1, 1);

      const reservation = reservationsService.createTimeField(1, 1, 1, '07:00', 60);
      expect(reservation).to.deep.equal({
        id: 1,
        date: '2024-10-31',
        categories: [
          {
            id: 1,
            title: 'Fotbal',
            fields: [
              {
                id: 1,
                occupiedSlots: [
                  {
                    startTime: '07:00',
                    duration: 60
                  }
                ]
              }
            ]
          }
        ],
        startHour: 6,
        endHour: 9,
        range: 15
      });
    });
  });

  describe('updateTimeField(reservationId, categoryId, fieldId, { startTime, duration })', () => {
    it('should update a time slot within a field and return the full reservation object', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      reservationsService.createField(1, 1);
      reservationsService.createTimeField(1, 1, 1, '07:00', 60);

      const reservation = reservationsService.updateTimeField(1, 1, 1, { startTime: '08:00', duration: 30 });
      expect(reservation).to.deep.equal({
        id: 1,
        date: '2024-10-31',
        categories: [
          {
            id: 1,
            title: 'Fotbal',
            fields: [
              {
                id: 1,
                occupiedSlots: [
                  {
                    startTime: '08:00',
                    duration: 30
                  }
                ]
              }
            ]
          }
        ],
        startHour: 6,
        endHour: 9,
        range: 15
      });
    });
  });
});
