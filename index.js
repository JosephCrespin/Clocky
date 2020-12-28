"use strict"

const calendar = document.getElementById("date");
const clock = document.getElementById("clock");

let intermediate;

function startClock() {
  const oneSecond = 1000;
  intermediate = setInterval(() => {
    let dates = new Date(Date.now());

    let today = formatDate(dates);
    printOnClock(today);
  }, oneSecond);
}

function printOnClock(date) {
  
  clock.innerHTML = `${date.hour} : ${date.minutes} : ${date.seconds}`;
  calendar.innerHTML = `${date.weekDay} , ${date.month} ${date.dayOfMonth}  ,${date.year}`;
}

window.onload = startClock();
