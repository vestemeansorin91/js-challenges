import { endHour, hourRange, setTimeSlots, startHour } from '../helpers/time-slots.helpers.js';

let reservations = [];
const timeSlots = setTimeSlots(startHour, endHour, hourRange);

const reservationsService = {
  getAllReservations: () => {
    return reservations;
  },
  resetReservations: () => {
    reservations = [];
  },
  createReservation: (date, startHour, endHour, hourRange) => {
    /* implementation */
  },
  updateReservation: (reservationId, { date, startHour, endHour, hourRange }) => {
    /* implementation */
  },
  deleteReservation: (reservationId) => {
    /* implementation */
  },
  createCategory: (reservationId, title) => {
    /* implementation */
  },
  updateCategory: (reservationId, categoryId, title) => {
    /* implementation */
  },
  deleteCategory: (reservationId, categoryId) => {
    /* implementation */
  },
  createField: (reservationId, categoryId) => {
    /* implementation */
  },
  deleteField: (reservationId, categoryId, fieldId) => {
    /* implementation */
  },
  createTimeField: (
    reservationId,
    categoryId,
    fieldId,
    startTime,
    duration
  ) => {
    /* implementation */
  },
  updateTimeField: (
    reservationId,
    categoryId,
    fieldId,
    { startTime, duration }
  ) => {
    /* implementation */
  },
  isSlotOccupied: (reservationId, categoryId, fieldId, time) => {
   /* implementation */
  },
  currentTimeSlot: (timeSlots, { hour, minutes }) => {
    /* implementation */
  },
};

export default reservationsService;
