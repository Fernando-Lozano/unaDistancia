const daysDis = document.querySelector("#days");
const hoursDis = document.querySelector("#hours");
const minutesDis = document.querySelector("#minutes");
const secondsDis = document.querySelector("#seconds");
const parent = document.querySelector("#parent");
const progressBar = document.querySelector("#progressBar");


let startDate = new Date();
const endDate = new Date(2023, 4, 13);
let days = Math.round((endDate - startDate) / 1000 / 60 / 60 / 24);

let width = parent.clientWidth;
width = width - width / 10;
const constant = 40; // some number chosen to shrink the progress bar by
const ratio = days / constant;
progressBar.style.width = width * ratio + "px";

const interval = setInterval(function() {
  let seconds = Math.round((endDate - startDate) / 1000);
  let minutes = Math.round(seconds / 60);
  let hours = Math.round(minutes / 60);
  let days = Math.round(hours / 24);

  secondsDis.textContent = seconds;
  minutesDis.textContent = minutes;
  hoursDis.textContent = hours;
  daysDis.textContent = days;

  startDate = new Date();
}, 1000);