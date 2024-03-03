import { createPhotos } from './data.js';

const pictures = document.querySelector('.pictures');
const template = document.querySelector('#picture').content;
const newPictureTemplate = template.querySelector('.picture');
const photosInfoArray = createPhotos();
const photoListFragment = document.createDocumentFragment();

photosInfoArray.forEach((photo) => {
  const picture = newPictureTemplate.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');
  const pictureInfo = picture.querySelector('.picture__info');
  pictureImg.src = photo.url;
  pictureImg.alt = photo.description;
  pictureInfo.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureInfo.querySelector('.picture__likes').textContent = photo.likes;
  photoListFragment.appendChild(picture);
});

pictures.appendChild(photoListFragment);
