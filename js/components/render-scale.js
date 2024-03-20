import '../../vendor/nouislider/nouislider.js';

const overlay = document.querySelector('.img-upload__overlay');
const fildsetEffects = overlay.querySelector('.img-upload__effects');
const preview = overlay.querySelector('.img-upload__preview');
const sliderEffectLevel = overlay.querySelector('.effect-level__slider');
const image = preview.querySelector('img');
const SCALE_PHOTO = {
  chrome: ['effects__preview--chrome', 0, 1, 0.1],
  sepia: ['effects__preview--sepia', 0, 1, 0.1],
  marvin: ['effects__preview--marvin', 0, 100, 1],
  phobos: ['effects__preview--phobos', 0, 3, 0.1],
  heat: ['effects__preview--heat', 1, 3, 0.1],
  none: ['effects__preview--none', 0, 0, 0],
};

noUiSlider.create(sliderEffectLevel, {
  start: 0,
  range: {
    min: 0,
    max: 0,
  },
  connect: 'lower',
  format: {
    from: function (value) {
      return parseFloat(value);
    },
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }

      return value.toFixed(1);
    },
  },
});

const removeEffectClass = () => {
  const effectClass = Object.values(SCALE_PHOTO).map((item) => item[0]);
  effectClass.forEach((el) => image.classList.remove(el));
};

const removeScaleFilter = () => {
  image.style.removeProperty('filter');
};

const setScaleStyle = (effectiveValue, levelValue) => {
  switch (effectiveValue) {
    case 'chrome': {
      image.style.setProperty('filter', `grayscale(${levelValue})`);
      break;
    }
    case 'sepia': {
      image.style.setProperty('filter', `sepia(${levelValue})`);
      break;
    }
    case 'marvin': {
      image.style.setProperty('filter', `invert(${levelValue}%)`);
      break;
    }
    case 'phobos': {
      image.style.setProperty('filter', `blur(${levelValue}px)`);
      break;
    }
    case 'heat': {
      image.style.setProperty('filter', `brightness(${levelValue})`);
      break;
    }
    default:
      removeScaleFilter();
  }
};

const changeEffects = () => {
  const levelValue = overlay.querySelector('.effect-level__value');
  removeEffectClass();
  const effectValue = fildsetEffects.querySelector(
    'input[name="effect"]:checked'
  ).value;

  const [effectClass, rangeMin, rangeMax, effectStep] =
    SCALE_PHOTO[effectValue];

  image.classList.add(effectClass);

  sliderEffectLevel.noUiSlider.updateOptions({
    range: {
      min: rangeMin,
      max: rangeMax,
    },
    start: rangeMin,
    step: effectStep,
  });

  sliderEffectLevel.noUiSlider.on('update', () => {
    levelValue.value = sliderEffectLevel.noUiSlider.get();
    setScaleStyle(effectValue, levelValue.value);
  });
};

export { changeEffects, removeEffectClass, removeScaleFilter };
