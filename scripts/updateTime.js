"use strict"

function formatTime(date) {
  const days = Math.floor(date / (1000 * 60 * 60 * 24));
  const hours = Math.floor(date / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(date / 1000 / 60) % 60;
  const seconds = Math.floor(date / 1000) % 60;
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  const timeFormated = { years, months, days, hours, minutes, seconds };
  
  return timeFormated;
}

function formatDate(time) {
  let dateFormated = {
    weekDay: days[time.getDay()],
    dayOfMonth: time.getDate(),
    month: months[time.getMonth()],
    year: time.getFullYear(),
    hour: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };

  return dateFormated;
}

