'use strict';

export function getPixabayImages(value) {
  const searchParams = new URLSearchParams({
    key: '46785976-efe48924e46a3ec0e24bd3bdc',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      if (images.total === 0) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      return images;
    });
}
