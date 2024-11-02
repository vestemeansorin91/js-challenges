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

function updateReservationDate(id, updateRes) {
  let reserv = reservations.find((res) => {
    return res.id === id;
  });
  if (!reserv) {
    return null;
  }

  const keys = Object.keys(updateRes);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (reserv.hasOwnProperty(key)) {
      reserv[key] = updateRes[key];
    }
  }

  return reserv;
}
let updatedReserv = updateReservationDate(1, { startHour: 12, endHour: 10 });
