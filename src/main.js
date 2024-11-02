'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import octagon from '/img/octagon.svg';
import { getPixabayImages, lastPageNumber } from './js/pixabay-api';
import { renderPixabayImgList } from './js/render-functions';

const searchForm = document.querySelector('.search');
const searchList = document.querySelector('.gallery');
const spinner = document.querySelector('.spinner');
const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', handlerSubmit);
loadMoreBtn.addEventListener('click', handleLoadMoreBtn);

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

let pageNumber;
let searchValue;

async function handlerSubmit(event) {
  event.preventDefault();
  searchValue = event.currentTarget.elements.searchInput.value.trim();

  if (!searchValue) {
    iziToast.show({
      message: 'Sorry, you are not enter search parametrs!',
      ...iziToastOptions,
    });
    return;
  }

  pageNumber = 1;
  searchList.innerHTML = '';
  loadMoreBtn.classList.add('hide');
  spinner.classList.add('loader');

  try {
    const images = await getPixabayImages(searchValue, pageNumber);
    renderPixabayImgList(images.hits, searchList);
    gallery.refresh();
    loadMoreBtn.classList.remove('hide');
  } catch (error) {
    iziToast.show({
      message: `${error}`,
      ...iziToastOptions,
    });
  }

  spinner.classList.remove('loader');
  event.target.reset();
}

async function handleLoadMoreBtn() {
  pageNumber += 1;
  loadMoreBtn.classList.add('hide');
  spinner.classList.add('loader');

  try {
    const images = await getPixabayImages(searchValue, pageNumber);
    renderPixabayImgList(images.hits, searchList);
    gallery.refresh();
  } catch (error) {
    iziToast.show({
      message: `${error}`,
      ...iziToastOptions,
    });
  }

  spinner.classList.remove('loader');
  const galleryItem = searchList.firstElementChild;
  const top = galleryItem.getBoundingClientRect().height;

  window.scrollBy({
    top: top * 2,
    left: 0,
    behavior: 'smooth',
  });

  if (pageNumber === lastPageNumber) {
    loadMoreBtn.classList.add('hide');
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      ...iziToastOptions,
    });
  } else {
    loadMoreBtn.classList.remove('hide');
  }
}
