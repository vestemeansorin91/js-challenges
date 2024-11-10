export const startHour = 9;
export const endHour = 20;
export const hourRange = 30;

export const doubleDigits = (input) => {
  return input < 10 ? `0${input}` : `${input}`;
};

export const setTimeSlots = (startHour, endHour, hourRange) => {
  const result = [];
  let minutes = 0;

  for (let hour = startHour; hour <= endHour; hour++) {
    const fullHour = `${doubleDigits(hour)}:${doubleDigits(minutes)}`;

    if (hour === endHour && minutes === hourRange) {
      continue;
    }

    if (minutes === 60) {
      minutes = 0;
      continue;
    }

    result.push(fullHour);
    minutes += hourRange;
    hour--;
  }

  return result;
};
