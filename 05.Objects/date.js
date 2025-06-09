// Date
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const date = new Date();
console.log(date);

const month = date.getMonth();
console.log(months[month]);

const weekDay = date.getDay();
console.log(days[weekDay]);

console.log(date.getFullYear());

console.log(date.getDate());

const sentence = `${days[weekDay]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

console.log(sentence);
