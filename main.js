const daysEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minsEl = document.getElementById("min");
const secondEl = document.getElementById("second");

let newYear = "1 jan 2023";

function countDown() {
  let newYearDate = new Date(newYear);
  let curentData = new Date();
  let sca = (newYearDate - curentData) / 1000;
  let days = Math.floor(sca / 3600 / 24);
  let hours = Math.floor(sca / 3600) % 24;
  let minutes = Math.floor(sca / 60) % 60;
  let seconds = Math.floor(sca) % 60;

  daysEl.innerHTML = days;
  hourEl.innerHTML = hours;
  minsEl.innerHTML = minutes;
  secondEl.innerHTML = seconds;
}

countDown();
