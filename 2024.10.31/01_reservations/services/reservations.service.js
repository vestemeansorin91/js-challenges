import {
  endHour,
  hourRange,
  setTimeSlots,
  startHour,
} from "../helpers/time-slots.helpers.js";

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
    const id = reservations.length + 1;
    reservations.push({
      id,
      date,
      startHour,
      endHour,
      hourRange,
      categories: [],
    });
  }, 
  updateReservation: (
    reservationId,
    updateReservation
  ) => {
    let reservation = reservations.find((res) => {
      return res.id === reservationId;
    });
    if (!reservation) {
      return;
    }

    for (let i = 0; i < Object.keys(updateReservation).length; i++) {
      const key = Object.keys(updateReservation)[i];
      if (reservation.hasOwnProperty(key)) {
        reservation[key] = updateReservation[key];
      }
    }
  },
  deleteReservation: (reservationId) => {
    const reservationIndex = reservations.findIndex((res) => {
      return res.id === reservationId;
    });
    if (reservationIndex === -1) {
      return;
    }

    reservations.splice(reservationIndex, 1);
  },
  createCategory: (reservationId, title) => {
    const reservation = reservations.find((res) => {
      return res.id === reservationId;
    });
    if (!reservation) {
      return;
    }

    const categoryId = reservation.categories.length + 1;
    let arr = reservation.categories;
    arr.push({
      id: categoryId,
      title,
      fields: [],
    });
  },
  updateCategory: (reservationId, categoryId, title) => {
    /* implementation */
  },
  deleteCategory: (reservationId, categoryId) => {
    const reservation = reservations.find((res) => {
      return res.id === reservationId;
    });
    if (!reservation) {
      return;
    }

    const categoryIndex = reservation.categories.findIndex((category) => {
      return category.id === categoryId;
    });
    if (categoryIndex === -1) {
      return;
    }

    reservation.categories.splice(categoryIndex, 1);
  },
  createField: (reservationId, categoryId) => {
    const reservation = reservations.find((reservation) => reservation.id === reservationId);
    if (!reservation) {
      return;
    }

    const category = reservation.categories.find(
      (category) => category.id === categoryId
    );
    if (!category) {
      return;
    }

    const fieldId = category.fields.length + 1;
    category.fields.push({
      id: fieldId,
      occupiedSlots: [],
    });
  },
  deleteField: (reservationId, categoryId, fieldId) => {
    const reservation = reservations.find((reservation) => reservation.id === reservationId);
    if (!reservation) {
      return;
    }

    const category = reservation.categories.find(
      (category) => category.id === categoryId
    );
    if (!category) {
      return;
    }

    const fieldIndex = category.fields.findIndex(
      (field) => field.id === fieldId
    );
    if (fieldIndex === -1) {
      return;
    }
    category.fields.splice(fieldIndex, 1);
  },
  createTimeField: (
    reservationId,
    categoryId,
    fieldId,
    startTime,
    duration
  ) => {
    const reservation = reservations.find((res) => res.id === reservationId);
    if (!reservation) {
      return;
    }

    const category = reservation.categories.find(
      (cat) => cat.categoryId === categoryId
    );
    if (!category) {
      return;
    }

    const field = category.fields.find((field) => field.fieldId === fieldId);
    if (!field) {
      return;
    }

    field.occupiedSlots.push({
      startTime,
      duration,
    });
  },
  updateTimeField: (
    reservationId,
    categoryId,
    fieldId,
    { startTime, duration }
  ) => {
    const reservation = reservations.find((res) => res.id === reservationId);
    if (!reservation) {
      return;
    }

    const category = reservation.categories.find(
      (cat) => cat.categoryId === categoryId
    );
    if (!category) {
      return;
    }

    const field = category.fields.find((field) => field.fieldId === fieldId);
    if (!field) {
      return;
    }

    const slot = field.occupiedSlots.find(
      (slot) => slot.startTime === startTime
    );
    if (!slot) {
      return;
    }

    slot.startTime = startTime;
    slot.duration = duration;
  },
  isSlotOccupied: (reservationId, categoryId, fieldId, time) => {
    const reservation = reservations.find((res) => res.id === reservationId);
    if (!reservation) {
      return;
    }

    const category = reservation.categories.find(
      (cat) => cat.categoryId === categoryId
    );
    if (!category) {
      return;
    }

    const field = category.fields.find((field) => field.fieldId === fieldId);
    if (!field) {
      return;
    }

    const slot = field.occupiedSlots.find((slot) => {
      return slot.startTime === time;
    });
    if (!slot) {
      return false;
    }

    if (slot.startTime === time) {
      return true;
    }
  },
  currentTimeSlot: (timeSlots, { hour, minutes }) => {
    const [firstHour, firstMinutes] = timeSlots[0]
      .split(":")
      .map((time) => Number(time));
    const [lastHour, lastMinutes] = timeSlots[timeSlots.length - 1]
      .split(":")
      .map((time) => Number(time));

    const currentTimeMinutes = hour * 60 + minutes;
    const firstTimeMinutes = firstHour * 60 + firstMinutes;
    const lastTimeMinutes = lastHour * 60 + lastMinutes;
    return (
      currentTimeMinutes >= firstTimeMinutes &&
      currentTimeMinutes <= lastTimeMinutes
    );
  },
};

export default reservationsService;
