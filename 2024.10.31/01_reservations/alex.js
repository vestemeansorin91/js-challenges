const reservations = [];

const start = 9;
const end = 24;
const range = 30;
const timeSlots = setTimeSlots(start, end, range);

function setTimeSlots(hour, end, range) {
  const result = [];
  let minutes = 0;

  for (let i = hour; i <= end; i++) {
    const fullHour = `${doubleDigits(i)}:${doubleDigits(minutes)}`;

    if (i === end && minutes === range) {
      continue;
    }

    if (minutes === 60) {
      minutes = 0;
      continue;
    }

    result.push(fullHour);
    minutes += range;
    i--;
  }

  return result;
}

function doubleDigits(input) {
  if (input < 10) {
    return "0" + input;
  }
  return input;
}

function createReservation(date, startHour, endHour, range) {
  const id = reservations.length + 1;
  reservations.push({
    id,
    date,
    startHour,
    endHour,
    range,
    categories: [],
  });
}

function updateReservationDate(id, updateReservation) {
  let reservation = reservations.find((res) => {
    return res.id === id;
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
}

function deleteReservation(id) {
  const reservationId = reservations.findIndex((res) => {
    return res.id === id;
  });
  if (reservationId === -1) {
    return;
  }

  reservations.splice(reservationId, 1);
}

function createCategory(reservationId, title) {
  const reservation = reservations.find((res) => {
    return res.id === reservationId;
  });
  if (!reservation) {
    return;
  }

  const categoryId = reservation.categories.length + 1;
  let arr = reservation.categories;
  arr.push({
    categoryId,
    title,
    fields: [],
  });
}

function deleteCategory(reservationId, categoryId) {
  const reservation = reservations.find((res) => {
    return res.id === reservationId;
  });
  if (!reservation) {
    return;
  }

  const category = reservation.categories.findIndex((item) => {
    return item.categoryId === categoryId;
  });
  if (category === -1) {
    return;
  }

  reservation.categories.splice(category, 1);
}

function createField(reservationId, categoryId) {
  const reservation = reservations.find((res) => res.id === reservationId);
  if (!reservation) {
    return;
  }

  const category = reservation.categories.find(
    (item) => item.categoryId === categoryId
  );
  if (!category) {
    return;
  }

  const fieldId = category.fields.length + 1;
  category.fields.push({
    fieldId,
    occupiedSlots: [],
  });
}

function deleteField(reservationId, categoryId, fieldId) {
  const reservation = reservations.find((res) => res.id === reservationId);
  if (!reservation) {
    return;
  }

  const category = reservation.categories.find(
    (item) => item.categoryId === categoryId
  );
  if (!category) {
    return;
  }

  const field = category.fields.findIndex((field) => field.fieldId === fieldId);
  if (field === -1) {
    return;
  }
  category.fields.splice(field, 1);
}

function createTimeField(
  reservationId,
  categoryId,
  fieldId,
  startTime,
  duration
) {
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
}

function updateTimeField(
  reservationId,
  categoryId,
  fieldId,
  { startTime, duration }
) {
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

  const slot = field.occupiedSlots.find((slot) => slot.startTime === startTime);
  if (!slot) {
    return;
  }

  slot.startTime = startTime;
  slot.duration = duration;
}

function isSlotOccupied(reservationId, categoryId, fieldId, time) {
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

  const slot = field.occupiedSlots.find((slot) => slot.startTime === time);
  if (!slot) {
    return;
  }

  return timeSlots.includes(slot.startTime);
}
