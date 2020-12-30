"use strict"

const clock = document.getElementById("clock");
const calendar = document.getElementById("date");

let clockIntermediate;

function showClock() {
  const oneSecond = 1000;
  clockIntermediate = setInterval(() => {
    let dates = new Date(Date.now());

    let today = formatDate(dates);
    printOnClock(today);
  }, oneSecond);
}

function printOnClock(time) {
  
  clock.innerHTML = `${time.hour} : ${time.minutes} : ${time.seconds}`;
  calendar.innerHTML = `${time.weekDay} , ${time.month} ${time.dayOfMonth}  ,${time.year}`;
}

window.onload = showClock();
