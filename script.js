const dayElem = document.getElementById("curr-day");
const timeElem = document.getElementById("curr-time");

function UTCTime() {
  let currTime = new Date();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let currentDay = days[currTime.getDay()]
  let currUtcTime = currTime.toUTCString().split(' ')[4];


  dayElem.textContent = `${currentDay}`;
  timeElem.textContent = `${currUtcTime}`
}
UTCTime();
setInterval(UTCTime, 1000);