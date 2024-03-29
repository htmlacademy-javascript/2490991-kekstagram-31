import { closeModal, setModal } from '../store/modal-handler.js';
import { onDocumentKeydown, onOverlayClick } from '../utils';

const body = document.body;

const setListeners = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onOverlayClick);
};

export const removeListeners = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onOverlayClick);
};

export const showSuccesMessage = () => {
  closeModal();
  setListeners();
  const successTemplate = body.querySelector('#success').content;
  const successMessage = successTemplate
    .querySelector('.success')
    .cloneNode(true);
  setModal(successMessage);
  const successButton = successMessage.querySelector('.success__button');

  body.appendChild(successMessage);

  successButton.addEventListener('click', () => {
    closeModal();
  });
};

export const showErrorMessage = () => {
  const errorTemplate = body.querySelector('#error').content;
  const errorMessage = errorTemplate.querySelector('.error').cloneNode(true);
  setModal(errorMessage);
  const errorButton = errorMessage.querySelector('.error__button');

  body.appendChild(errorMessage);

  errorButton.addEventListener('click', () => {
    closeModal();
  });
};
