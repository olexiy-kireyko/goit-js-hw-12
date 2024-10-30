'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import octagon from '/img/octagon.svg';
import { getPixabayImages } from './js/pixabay-api';
import { renderPixabayImgList } from './js/render-functions';

const searchForm = document.querySelector('.search');
const searchList = document.querySelector('.gallery');
const spinner = document.querySelector('.spinner');

let gallery = new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
});

const iziToastOptions = {
  iconUrl: octagon,
  backgroundColor: 'red',
  messageColor: 'white',
  layout: 2,
  closeOnClick: true,
  close: false,
  position: 'center',
  messageSize: 24,
  timeout: 3000,
};

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchValue = event.currentTarget.elements.searchInput.value.trim();

  if (!searchValue) {
    iziToast.show({
      message: 'Sorry, you are not enter search parametrs!',
      ...iziToastOptions,
    });
    return;
  }

  searchList.innerHTML = '';
  spinner.classList.add('loader');

  getPixabayImages(searchValue)
    .then(images => {
      renderPixabayImgList(images.hits, searchList);
      gallery.refresh();
    })
    .catch(error => {
      iziToast.show({
        message: `${error}`,
        ...iziToastOptions,
      });
    })
    .finally(() => {
      spinner.classList.remove('loader');
    });
  event.currentTarget.reset();
});
