import { closePreviewPicture } from './render-load-photo';

const body = document.body;

export const showSuccesMessage = () => {
  const successTemplate = body.querySelector('#success').content;
  const successMessage = successTemplate
    .querySelector('.success')
    .cloneNode(true);
  const successButton = successMessage.querySelector('.success__button');

  body.appendChild(successMessage);

  successButton.addEventListener('click', () => {
    successMessage.remove();
    closePreviewPicture();
  });
};

export const showErrorMessage = () => {
  const errorTemplate = body.querySelector('#error').content;
  const errorMessage = errorTemplate.querySelector('.error').cloneNode(true);

  const errorButton = errorMessage.querySelector('.error__button');

  body.appendChild(errorMessage);

  errorButton.addEventListener('click', () => {
    errorMessage.remove();
  });
};
