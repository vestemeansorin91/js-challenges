const reservations = [];
const id = reservations.length + 1;

function createReservation(date, startHour, endHour, range) {
  reservations.push({
    id,
    date,
    startHour,
    endHour,
    range,
    categories: [],
  });
  return reservations;
}
createReservation("2024-10-31", 6, 9, 15);

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

  return reservation;
}
let updatedReserv = updateReservationDate(1, { startHour: 2, endHour: 10 });

function deleteReservation(id) {
  const reservationID = reservations.findIndex((res) => {
    return res.id === id;
  });
  if (reservationID === -1) {
    return;
  }

  return reservations.splice(reservationID, 1);
}

const deletedReservation = deleteReservation(1);
