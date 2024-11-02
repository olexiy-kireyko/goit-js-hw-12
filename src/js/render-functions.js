'use strict';

export function renderPixabayImgList(images, searchList) {
  const imagesList = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="gallery-item">
          <a href=${largeImageURL} class="gallery-ref">
            <img class="gallery-img" src=${webformatURL} alt="${tags}" title=""/>
          </a>
            <ul class="gallery-descrip">
          <li><b>likes</b><span>${likes}</span></li>
          <li><b>views</b><span>${views}</span></li>
          <li><b>comments</b><span>${comments}</span></li>
          <li><b>downloads</b><span>${downloads}</span></li>
             </ul>
        </li>`;
      }
    )
    .join('');
  searchList.insertAdjacentHTML('beforeend', imagesList);
}
