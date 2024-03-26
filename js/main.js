import { renderPhoto } from './components/render-miniatures.js';
import { openLoadFile } from './components/render-load-photo.js';
import { getData } from './store/fetch-api.js';
import { ALERT_SHOW_TIME, FILE_TYPES } from './constants.js';
import { debounce } from './utils.js';
import { setFilterClick } from './store/filter-photo.js';

const body = document.body;
const imgUpload = body.querySelector('.img-upload');
const loadFileButton = imgUpload.querySelector('#upload-file');

const showDataAlert = () => {
  const dataErrorTemplate = body.querySelector('#data-error').content;
  const dataAlert = dataErrorTemplate
    .querySelector('.data-error')
    .cloneNode(true);

  body.appendChild(dataAlert);

  setTimeout(() => {
    dataAlert.remove();
  }, ALERT_SHOW_TIME);
};

getData()
  .then((photos) => {
    renderPhoto(photos);
    setFilterClick(debounce(() => renderPhoto(photos)));
  })
  .catch(() => {
    showDataAlert();
  });

loadFileButton.addEventListener('change', (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    openLoadFile(file);
  }
});
