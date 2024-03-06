import { isEscapeKey } from '../utils.js';
import { DEFAULT_COMMENTS_QTY } from '../constants.js';
import { renderPictureComments } from './render-comments.js';

const bigPictureModal = document.querySelector('.big-picture');
const cancel = bigPictureModal.querySelector('.big-picture__cancel');
const bigPictureImg = bigPictureModal.querySelector('.big-picture__img');
const commentShowCount = bigPictureModal.querySelector(
  '.social__comment-shown-count'
);

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureModal.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};

function openFullScreenModal({ url, description, likes, comments }) {
  bigPictureImg.querySelector('img').src = url;
  bigPictureModal.querySelector('.social__caption').textContent = description;
  bigPictureModal.querySelector('.likes-count').textContent = likes;
  bigPictureModal
    .querySelector('.social__comment-count')
    .classList.add('hidden');
  bigPictureModal.querySelector('.comments-loader').classList.add('hidden');

  if (comments.length < DEFAULT_COMMENTS_QTY) {
    commentShowCount.textContent = comments.length;
  } else {
    commentShowCount.textContent = DEFAULT_COMMENTS_QTY;
  }

  bigPictureModal.querySelector('.social__comment-total-count').textContent =
    comments.length;
  renderPictureComments(comments);
  openBigPicture();
}

function closeBigPicture() {
  bigPictureModal.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.querySelector('body').classList.remove('modal-open');
}

cancel.addEventListener('click', () => {
  closeBigPicture();
});

export { openFullScreenModal };
