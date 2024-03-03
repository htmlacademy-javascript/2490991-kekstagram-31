import { getRandomInt, createRandomIdGenerator } from './utils.js';

const PHOTO_COUNT = 25;
const DEFAULT_NUMBER = 0;
const COMMENT_ID_NUMBERS = {
  min: 0,
  max: 1000
};
const COMMENT_NUMBERS = {
  min: 0,
  max: 30
};

const LIKE_NUMBERS = {
  min: 15,
  max: 200,
};
const PHOTO_NUMBERS = {
  min: 1,
  max: 25,
};
const MESSAGE_ID_NUMBERS = {
  min: 1,
  max: 2,
};

const names = [
  'Антон',
  'Светлана',
  'Алексей',
  'Мария',
  'Мия',
  'Матвей',
  'Ярослав',
  'Артём',
  'Мирослав',
  'Добрыня',
  'Дмитрий',
  'Дарья',
  'Милана',
  'Вадим',
  'Илья',
  'Алисия',
  'Макар',
  'Полина',
  'Максим',
  'Амелия',
];
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const descriptions = [
  'Отличный куррорт.',
  'Вперед на пляж',
  'Прекрасная лагуна',
  'Креативный фотограф',
  'Удивительные блюда',
  'Быстрая тачка',
  'Клубничка на завтрак',
  'Ягодный морс',
  'Полет над пояжем',
  'Удобная обувница',
  'Красивый вид',
  'Новейшая Audi',
  'Эксклюзивные блюда',
  'Сашими из котика',
  'Теплая обувка',
  'Вид из эллюминатора',
  'Хоровое исполнение',
  'Ретро',
  'Обуная подсветка',
  'Пальмовая роща',
  'Салатик',
  'Закат на пляже',
  'Крабик',
  'Суперский концерт',
  'Бегемоты ваши друзья',
];

const generatePhotoId = createRandomIdGenerator(
  PHOTO_NUMBERS.min,
  PHOTO_NUMBERS.max
);
const generateCommentId = createRandomIdGenerator(COMMENT_ID_NUMBERS.min, COMMENT_ID_NUMBERS.max);

const getRandomMessage = () => messages[getRandomInt(DEFAULT_NUMBER, messages.length - 1)];

const createComment = () => {
  const num = getRandomInt(1, 6);
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${num}.svg`,
    message: Array.from(
      { length: getRandomInt(MESSAGE_ID_NUMBERS.min, MESSAGE_ID_NUMBERS.max) },
      getRandomMessage
    ),
    name: names[getRandomInt(DEFAULT_NUMBER, names.length - 1)],
  };
};

const createPhoto = () => {
  const photoId = generatePhotoId();
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: descriptions[photoId - 1],
    likes: getRandomInt(LIKE_NUMBERS.min, LIKE_NUMBERS.max),
    comments: Array.from(
      { length: getRandomInt(COMMENT_NUMBERS.min, COMMENT_NUMBERS.max) },
      createComment
    ),
  };
};

const createPhotos = () => Array.from({ length: PHOTO_COUNT }, createPhoto);

export { createPhotos };
