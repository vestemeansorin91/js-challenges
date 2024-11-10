import { expect } from 'chai';
import reservationsService from '../services/reservations.service.js';
import { endHour, hourRange, setTimeSlots, startHour } from '../helpers/time-slots.helpers.js';

const timeSlots = setTimeSlots(startHour, endHour, hourRange);

describe('Reservations Service Tests', () => {
  beforeEach(() => {
    reservationsService.resetReservations();
  });

  describe('createReservation(date, startHour, endHour, hourRange)', () => {
    it('should create a new reservation and confirm reservations array contains it', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      expect(reservationsService.getAllReservations()).to.deep.equal([
        {
          id: 1,
          date: '2024-10-31',
          categories: [],
          startHour: 6,
          endHour: 9,
          hourRange: 15
        }
      ]);
    });
  });

  describe('updateReservation(reservationId, { date, startHour, endHour, hourRange })', () => {
    it('should update a reservation and confirm reservations array contains the updated reservation', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.updateReservation(1, { date: '2024-11-02', startHour: 8 });
      expect(reservationsService.getAllReservations()).to.deep.equal([
        {
          id: 1,
          date: '2024-11-02',
          categories: [],
          startHour: 8,
          endHour: 9,
          hourRange: 15
        }
      ]);
    });
  });

  describe('deleteReservation(reservationId)', () => {
    it('should delete a reservation and confirm reservations array is empty', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.deleteReservation(1);
      expect(reservationsService.getAllReservations()).to.deep.equal([]);
    });
  });

  describe('createCategory(reservationId, title)', () => {
    it('should create a new category and confirm reservations array contains the updated reservation', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      expect(reservationsService.getAllReservations()).to.deep.equal([
        {
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
          hourRange: 15
        }
      ]);
    });
  });

  describe('updateCategory(reservationId, categoryId, title)', () => {
    it('should update a category title and confirm reservations array contains the updated reservation', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      reservationsService.updateCategory(1, 1, 'Squash');
      expect(reservationsService.getAllReservations()).to.deep.equal([
        {
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
          hourRange: 15
        }
      ]);
    });
  });

  describe('deleteCategory(reservationId, categoryId)', () => {
    it('should delete a category and confirm reservations array contains the updated reservation', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      reservationsService.deleteCategory(1, 1);
      expect(reservationsService.getAllReservations()).to.deep.equal([
        {
          id: 1,
          date: '2024-10-31',
          categories: [],
          startHour: 6,
          endHour: 9,
          hourRange: 15
        }
      ]);
    });
  });

  describe('createField(reservationId, categoryId)', () => {
    it('should create a field within a category and confirm reservations array contains the updated reservation', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      reservationsService.createField(1, 1);
      expect(reservationsService.getAllReservations()).to.deep.equal([
        {
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
          hourRange: 15
        }
      ]);
    });
  });

  describe('deleteField(reservationId, categoryId, fieldId)', () => {
    it('should delete a field from a category and confirm reservations array contains the updated reservation', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      reservationsService.createField(1, 1);
      reservationsService.deleteField(1, 1, 1);
      expect(reservationsService.getAllReservations()).to.deep.equal([
        {
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
          hourRange: 15
        }
      ]);
    });
  });

  describe('createTimeField(reservationId, categoryId, fieldId, startTime, duration)', () => {
    it('should create a time slot within a field and confirm reservations array contains the updated reservation', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      reservationsService.createField(1, 1);
      reservationsService.createTimeField(1, 1, 1, '07:00', 60);
      expect(reservationsService.getAllReservations()).to.deep.equal([
        {
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
          hourRange: 15
        }
      ]);
    });
  });

  describe('updateTimeField(reservationId, categoryId, fieldId, { startTime, duration })', () => {
    it('should update a time slot within a field and confirm reservations array contains the updated reservation', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      reservationsService.createField(1, 1);
      reservationsService.createTimeField(1, 1, 1, '07:00', 60);
      reservationsService.updateTimeField(1, 1, 1, { startTime: '08:00', duration: 30 });
      expect(reservationsService.getAllReservations()).to.deep.equal([
        {
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
          hourRange: 15
        }
      ]);
    });
  });

  describe('isSlotOccupied(reservationId, categoryId, fieldId, time)', () => {
    it('should return true if the slot is occupied', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      reservationsService.createField(1, 1);
      reservationsService.createTimeField(1, 1, 1, '08:00', 60);
      
      const result = reservationsService.isSlotOccupied(1, 1, 1, '08:00');
      expect(result).to.be.true;
    });

    it('should return false if the slot is not occupied', () => {
      reservationsService.createReservation('2024-10-31', 6, 9, 15);
      reservationsService.createCategory(1, 'Fotbal');
      reservationsService.createField(1, 1);
      reservationsService.createTimeField(1, 1, 1, '08:00', 60);
      
      const result = reservationsService.isSlotOccupied(1, 1, 1, '22:00');
      expect(result).to.be.false;
    });
  });

  describe('currentTimeSlot(timeSlots, { hour, minutes })', () => {
    it('should return true if the time is within a valid time slot', () => {
      const result = reservationsService.currentTimeSlot(timeSlots, { hour: 9, minutes: 40 });
      expect(result).to.be.true;
    });

    it('should return false if the time is outside of the defined time slots', () => {
      const result = reservationsService.currentTimeSlot(timeSlots, { hour: 23, minutes: 52 });
      expect(result).to.be.false;
    });
  });
});
