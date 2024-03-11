import { isEscapeKey } from '../utils.js';
import { renderPhotoComments } from './render-comments.js';

const bigPictureModal = document.querySelector('.big-picture');
const cancel = bigPictureModal.querySelector('.big-picture__cancel');
const bigPictureImg = bigPictureModal.querySelector('.big-picture__img');
const moreCommentsButton = bigPictureModal.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onDocumentKeyPress = (evt) => {
  if (evt.target.classList.contains('overlay')) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentKeyPress);
  bigPictureModal.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};

function openFullScreenModal({ url, description, likes, comments }) {
  bigPictureImg.querySelector('img').src = url;
  bigPictureModal.querySelector('.social__caption').textContent = description;
  bigPictureModal.querySelector('.likes-count').textContent = likes;

  bigPictureModal.querySelector('.social__comment-total-count').textContent =
    comments.length;

  renderPhotoComments(comments, bigPictureModal);
  openBigPicture();
}

function closeBigPicture() {
  bigPictureModal.classList.add('hidden');
  moreCommentsButton.classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentKeyPress);
  document.querySelector('body').classList.remove('modal-open');
}

cancel.addEventListener('click', () => {
  closeBigPicture();
});

export { openFullScreenModal };
