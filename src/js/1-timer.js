'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;

const dateWindow = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (currentDate > selectedDates[0]) {
      iziToast.show({
        message: 'Please choose a date in the future',
        backgroundColor: 'red',
        messageColor: 'white',
        iconUrl: '/img/favicon.svg',
        layout: 2,
        closeOnClick: true,
        close: false,
        position: 'topCenter',
        messageSize: 24,
        timeout: 40000,
      });
      startBtn.disabled = true;
    } else {
      userSelectedDate = selectedDates[0];
      startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', startTimer);

function startTimer() {
  startBtn.disabled = true;
  dateWindow.disabled = true;

  const intervalId = setInterval(() => {
    const currentDate = new Date();
    const deltaTime = userSelectedDate - currentDate;
    if (deltaTime < 1000) {
      clearInterval(intervalId);
      dateWindow.disabled = false;
    }
    const convertDate = convertMs(deltaTime);
    const daysLength = String(convertDate.days).length;
    dataDays.textContent =
      daysLength > 2 ? convertDate.days : addLeadingZero(convertDate.days);
    dataHours.textContent = addLeadingZero(convertDate.hours);
    dataMinutes.textContent = addLeadingZero(convertDate.minutes);
    dataSeconds.textContent = addLeadingZero(convertDate.seconds);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(str) {
  return String(str).padStart(2, '0');
}
