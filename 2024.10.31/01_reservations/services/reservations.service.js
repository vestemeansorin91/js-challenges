let reservations = [];

const reservationsService = {
  createReservation: (date, startHour, endHour, range) => { /* implementation */ },
  updateReservationDate: (reservationId, { date, startHour, endHour, range }) => { /* implementation */ },
  deleteReservation: (reservationId) => { /* implementation */ },
  createCategory: (reservationId, title) => { /* implementation */ },
  updateCategory: (reservationId, categoryId, title) => { /* implementation */ },
  deleteCategory: (reservationId, categoryId) => { /* implementation */ },
  createField: (reservationId, categoryId) => { /* implementation */ },
  deleteField: (reservationId, categoryId, fieldId) => { /* implementation */ },
  createTimeField: (reservationId, categoryId, fieldId, startTime, duration) => { /* implementation */ },
  updateTimeField: (reservationId, categoryId, fieldId, { startTime, duration }) =>{ /* implementation */ }
};

export default reservationsService;
