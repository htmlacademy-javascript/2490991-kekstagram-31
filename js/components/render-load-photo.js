import { onDocumentKeydown, onOverlayClick } from '../utils';
import { SIZE_NUMS } from '../constants.js';
import './prestine-validate.js';
import {
  changeEffects,
  removeEffectClass,
  resetScale,
} from './render-scale.js';
import { closeModal, setModal } from '../store/modal-handler.js';

const body = document.body;
const imgUpload = body.querySelector('.img-upload');
const overlay = imgUpload.querySelector('.img-upload__overlay');
const reset = imgUpload.querySelector('.img-upload__cancel');
const preview = overlay.querySelector('.img-upload__preview');
const imgScale = overlay.querySelector('.img-upload__scale');
const fildsetEffects = overlay.querySelector('.img-upload__effects');
const listEffects = overlay.querySelectorAll('.effects__preview');
const image = preview.querySelector('img');

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

const clearPreview = () => {
  body.querySelector('#upload-select-image').reset();
  overlay
    .querySelectorAll('.img-upload__field-wrapper--error')
    .forEach((el) => el.remove());
  preview.style.removeProperty('transform');
  listEffects.forEach((item) => {
    item.style.removeProperty('background-image');
  });
  removeEffectClass();
  resetScale();
};

const setNewImage = (imgFile) => {
  image.src = imgFile;
  listEffects.forEach((item) => {
    item.style.setProperty('background-image', `url("${imgFile}")`);
  });
};

function closePreviewPicture() {
  clearPreview();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onOverlayClick);
  body.classList.remove('modal-open');
  overlay.classList.add('hidden');
}

const openLoadFile = (evt) => {
  setModal(imgUpload);
  const form = body.querySelector('.img-upload__form');
  form.setAttribute(
    'action',
    'https://31.javascript.htmlacademy.pro/kekstagram'
  );
  form.setAttribute('method', 'POST');
  form.setAttribute('enctype', 'multipart/form-data');
  setNewImage(URL.createObjectURL(evt.target.files[0]));
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onOverlayClick);
};

imgScale.querySelector('.scale__control--smaller').onclick = () =>
  changeSize(true);
imgScale.querySelector('.scale__control--bigger').onclick = () => changeSize();

fildsetEffects.addEventListener('change', () => {
  changeEffects();
});

reset.addEventListener('click', () => {
  closeModal();
});

export { openLoadFile, closePreviewPicture };
