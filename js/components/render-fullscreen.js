import { onDocumentKeydown, onOverlayClick } from '../utils.js';
import { renderPhotoComments } from './render-comments.js';
import { closeModal, setModal } from './modal-handler.js';

const body = document.body;
const bigPictureModal = body.querySelector('.big-picture');
const cancel = bigPictureModal.querySelector('.big-picture__cancel');
const bigPictureImg = bigPictureModal.querySelector('.big-picture__img');
const moreCommentsButton = bigPictureModal.querySelector('.comments-loader');

const openBigPicture = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureModal.addEventListener('click', onOverlayClick);
  bigPictureModal.classList.remove('hidden');
  body.classList.add('modal-open');
};

function openFullScreenModal({ url, description, likes, comments }) {
  setModal(bigPictureModal);
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
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  bigPictureModal.removeEventListener('click', onOverlayClick);
}

cancel.addEventListener('click', () => {
  closeModal();
});

export { openFullScreenModal, closeBigPicture };
