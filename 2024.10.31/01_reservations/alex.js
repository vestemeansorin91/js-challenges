const reservations = [];

createReservation("2024-03-10", 10, 20, 30);
createCategory(1, "Fotbal");
console.log(reservations[0].categories);

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
    return;
  }

  return reservations.splice(reservationID, 1);
}

function createCategory(reservationId, title) {
  const reservation = reservations.find((res) => {
    return res.id === reservationId;
  });
  if (!reservation) {
    return null;
  }
  const categoryId = reservation.categories.length + 1;

  reservation.categories.push({
    categoryId,
    title,
    fields: [],
  });
}
