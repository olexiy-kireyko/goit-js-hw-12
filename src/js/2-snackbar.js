'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import circle from '/img/circle.svg';
import octagon from '/img/octagon.svg';

const promiseForm = document.querySelector('.form');

promiseForm.addEventListener('submit', event => {
  event.preventDefault();
  const delay = promiseForm.elements.delay.value;
  const state = promiseForm.elements.state.value;
  promiseForm.reset();
  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } else {
      setTimeout(() => {
        reject(delay);
      }, delay);
    }
  });

  promise
    .then(delay => {
      iziToast.show({
        message: `Fulfilled promise in ${delay}ms`,
        iconUrl: circle,
        backgroundColor: '#59a10d',
        messageColor: 'white',
        layout: 2,
        closeOnClick: true,
        close: false,
        position: 'topCenter',
        messageSize: 24,
        timeout: 4000,
      });
    })
    .catch(delay => {
      iziToast.show({
        message: `Rejected promise in ${delay}ms`,
        iconUrl: octagon,
        backgroundColor: '#ef4040',
        messageColor: 'white',
        layout: 2,
        closeOnClick: true,
        close: false,
        position: 'topCenter',
        messageSize: 24,
        timeout: 4000,
      });
    });
});
