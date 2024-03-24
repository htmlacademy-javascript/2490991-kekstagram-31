import { openFullScreenModal } from './render-fullscreen.js';
import { shuffle } from '../utils.js';

const body = document.body;
const pictures = body.querySelector('.pictures');
const template = body.querySelector('#picture').content;
const newPictureTemplate = template.querySelector('.picture');
const photoListFragment = document.createDocumentFragment();
const imgFilter = body.querySelector('.img-filters');
const imgFilterFrom = imgFilter.querySelector('.img-filters__form');

const clearPictureList = () => {
  const pictureNodes = pictures.querySelectorAll('.picture');
  pictureNodes.forEach((item) => item.remove());
};

const sortPhotos = (photoA, photoB) =>
  photoB.comments.length - photoA.comments.length;

const transformArray = (photos) => {
  const activeButton = imgFilterFrom.querySelector(
    '.img-filters__button--active'
  );
  const buttonFilterId = activeButton.getAttribute('id');

  switch (buttonFilterId) {
    case 'filter-random': {
      return shuffle(photos).slice(0, 10);
    }
    case 'filter-discussed': {
      return photos.sort(sortPhotos);
    }
    default:
      return photos;
  }
};

const renderPhoto = (photos) => {
  clearPictureList();

  transformArray(photos.slice()).forEach(
    ({ id, url, description, comments, likes }) => {
      const picture = newPictureTemplate.cloneNode(true);
      const pictureImg = picture.querySelector('.picture__img');
      const pictureInfo = picture.querySelector('.picture__info');
      pictureImg.dataset.photoId = id;
      pictureImg.src = url;
      pictureImg.alt = description;
      pictureInfo.querySelector('.picture__comments').textContent =
        comments.length;
      pictureInfo.querySelector('.picture__likes').textContent = likes;
      photoListFragment.appendChild(picture);
    }
  );

  pictures.appendChild(photoListFragment);

  pictures.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      evt.preventDefault();
      const index = photos.findIndex(
        (el) => el.id === Number(evt.target.dataset.photoId)
      );
      openFullScreenModal(photos[index]);
    }
  });
};

export { renderPhoto };
