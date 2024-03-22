import { closeModal, setModal } from './modal-handler.js';

const body = document.body;

export const showSuccesMessage = () => {
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
