'use strict';

import axios from 'axios';

export let lastPageNumber;

export async function getPixabayImages(value, pageNumber) {
  axios.defaults.baseURL = 'https://pixabay.com';

  const searchParams = {
    key: '46785976-efe48924e46a3ec0e24bd3bdc',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pageNumber,
    per_page: 15,
  };

  const images = await axios.get('/api/', { params: searchParams });

  if (images.data.total === 0) {
    throw new Error(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }
  lastPageNumber = Math.ceil(images.data.totalHits / searchParams.per_page);

  return images.data;
}
