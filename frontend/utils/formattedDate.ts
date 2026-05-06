const WEEK_DAYS = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formattedDate = (date: Date | string) => {
  const transformedDate = new Date(date);
  return {
    day: WEEK_DAYS[transformedDate.getDay()],
    month: MONTHS[transformedDate.getMonth()],
    year: transformedDate.getFullYear(),
    dayOfMonth: transformedDate.getDate(),
    time: transformedDate.toLocaleTimeString(),
  };
};
