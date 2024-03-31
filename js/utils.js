import { closeModal } from './store/modal-handler.js';

const getRandomInt = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

const createRandomIdGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentId = getRandomInt(min, max);

    if (previousValues.length >= max - min + 1) {
      return null;
    }

    while (previousValues.includes(currentId)) {
      currentId = getRandomInt(min, max);
    }
    previousValues.push(currentId);
    return currentId;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentKeydown = (evt) => {
  if (
    isEscapeKey(evt) &&
    !document.activeElement.parentElement.classList.contains(
      'img-upload__field-wrapper'
    )
  ) {
    evt.preventDefault();
    closeModal();
  }
};

const onOverlayClick = (evt) => {
  if (
    evt.target.classList.contains('overlay') ||
    evt.target.classList.contains('img-upload__overlay') ||
    evt.target.classList.contains('error') ||
    evt.target.classList.contains('success')
  ) {
    evt.preventDefault();
    closeModal();
  }
};

const shuffle = (arrays) => {
  for (let i = arrays.length - 1; i > 0; i--) {
    const j = getRandomInt(0, i + 1);
    [arrays[i], arrays[j]] = [arrays[j], arrays[i]];
  }

  return arrays;
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const transformArray = (photos) => {
  const imgFilter = document.querySelector('.img-filters');
  const imgFilterFrom = imgFilter.querySelector('.img-filters__form');

  const activeButton = imgFilterFrom.querySelector(
    '.img-filters__button--active'
  );
  const buttonFilterId = activeButton.getAttribute('id');

  switch (buttonFilterId) {
    case 'filter-random': {
      return shuffle(photos).slice(0, 10);
    }
    case 'filter-discussed': {
      return photos.sort(
        (photoA, photoB) => photoB.comments.length - photoA.comments.length
      );
    }
    default:
      return photos;
  }
};

export {
  getRandomInt,
  createRandomIdGenerator,
  onDocumentKeydown,
  onOverlayClick,
  shuffle,
  debounce,
  transformArray,
};
