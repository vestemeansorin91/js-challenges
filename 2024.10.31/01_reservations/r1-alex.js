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
