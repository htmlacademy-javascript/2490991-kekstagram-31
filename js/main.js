import { renderPhoto } from './components/render-miniatures.js';
import { createPhotos } from './data.js';
import { openLoadFile } from './components/render-load-photo.js';

const imgUpload = document.querySelector('.img-upload');
const loadFileButton = imgUpload.querySelector('#upload-file');

renderPhoto(createPhotos());

loadFileButton.addEventListener('change', (evt) => {
  openLoadFile(evt);
});
