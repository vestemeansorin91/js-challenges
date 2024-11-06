const reservations = [];

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
    return null;
  }

  for (let i = 0; i < Object.keys(updateReservation).length; i++) {
    const key = Object.keys(updateReservation)[i];
    if (reservation.hasOwnProperty(key)) {
      reservation[key] = updateReservation[key];
    }
  }
}

function deleteReservation(id) {
  const reservationID = reservations.findIndex((res) => {
    return res.id === id;
  });
  if (reservationID === -1) {
    console.log("ceva");
  }

  reservations.splice(reservationID, 1);
}

function createCategory(reservationId, title) {
  const reservation = reservations.find((res) => {
    return res.id === reservationId;
  });
  if (!reservation) {
    return null;
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
