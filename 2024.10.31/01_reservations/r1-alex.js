let id = 0;
function createReservation(date, startHour, endHour, range) {
  id++;
  return {
    id: id,
    date: date,
    categories: [],
    startHour: startHour,
    endHour: endHour,
    range: range,
  };
}
const reservation = createReservation("2024-10-31", 6, 9, 15);
console.log(reservation);
