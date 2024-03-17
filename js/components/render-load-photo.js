import { isEscapeKey } from '../utils';
import { SIZE_NUMS } from '../constants.js';
import './prestine-validate.js';
import { changeEffects } from './render-scale.js';

const body = document.body;
const imgUpload = body.querySelector('.img-upload');
const overlay = imgUpload.querySelector('.img-upload__overlay');
const reset = imgUpload.querySelector('.img-upload__cancel');
const preview = overlay.querySelector('.img-upload__preview');
const imgScale = overlay.querySelector('.img-upload__scale');
const fildsetEffects = overlay.querySelector('.img-upload__effects');
const image = preview.querySelector('img');

const onDocumentKeydown = (evt) => {
  if (
    isEscapeKey(evt) &&
    !document.activeElement.parentElement.classList.contains(
      'img-upload__field-wrapper'
    )
  ) {
    evt.preventDefault();
    closePreviewPicture();
  }
};

const changeSize = (isDecrease) => {
  const controlInput = imgScale.querySelector('.scale__control--value');
  let value = parseInt(controlInput.value, 10);
  if (isDecrease && value > SIZE_NUMS.min) {
    value -= SIZE_NUMS.min;
  } else if (!isDecrease && value < SIZE_NUMS.max) {
    value += SIZE_NUMS.min;
  }

  controlInput.value = `${value}%`;
  preview.style.setProperty('transform', `scale(${value / 100})`);
};

function closePreviewPicture() {
  document.removeEventListener('keydown', onDocumentKeydown);
  body.querySelector('#upload-select-image').reset();
  preview.removeAttribute('style');
  image.removeAttribute('class');
  body.classList.remove('modal-open');
  overlay.classList.add('hidden');
}

const openLoadFile = (evt) => {
  const form = body.querySelector('.img-upload__form');
  form.setAttribute('action', 'https://31.javascript.htmlacademy.pro/kekstagram');
  form.setAttribute('method', 'POST');
  form.setAttribute('enctype', 'multipart/form-data');
  image.src = URL.createObjectURL(evt.target.files[0]);
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

imgScale.querySelector('.scale__control--smaller').onclick = () =>
  changeSize(true);
imgScale.querySelector('.scale__control--bigger').onclick = () => changeSize();

fildsetEffects.addEventListener('change', () => {
  changeEffects();
});

reset.addEventListener('click', () => {
  closePreviewPicture();
});

export { openLoadFile };
