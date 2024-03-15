import { openFullScreenModal } from './render-fullscreen.js';

const pictures = document.querySelector('.pictures');
const template = document.querySelector('#picture').content;
const newPictureTemplate = template.querySelector('.picture');
const photoListFragment = document.createDocumentFragment();

const renderPhoto = (photos) => {
  photos.forEach(({ id, url, description, comments, likes }) => {
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
  });

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
