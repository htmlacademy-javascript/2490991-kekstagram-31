const body = document.body;
const imgFilter = body.querySelector('.img-filters');
const imgFilterFrom = imgFilter.querySelector('.img-filters__form');

const changeActiveButton = (buttonId) => {
  const activeButton = imgFilterFrom.querySelector(
    '.img-filters__button--active'
  );
  activeButton.classList.remove('img-filters__button--active');
  const selectedButton = imgFilterFrom.querySelector(`#${buttonId}`);
  selectedButton.classList.add('img-filters__button--active');
};

const setFilterClick = (cb) => {
  imgFilter.classList.remove('img-filters--inactive');
  imgFilterFrom.addEventListener('click', (evt) => {
    const buttonId = evt.target.getAttribute('id');
    cb();
    changeActiveButton(buttonId);
  });
};

export { setFilterClick };
