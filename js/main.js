const names = ['Антон', 'Светлана', 'Алексей', 'Мария', 'Мия', 'Матвей', 'Ярослав', 'Артём', 'Мирослав', 'Добрыня', 'Дмитрий', 'Дарья', 'Милана', 'Вадим', 'Илья', 'Алисия', 'Макар', 'Полина', 'Максим', 'Амелия'];
const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const descriptions = ['Отличный куррорт.', 'Вперед на пляж', 'Прекрасная лагуна', 'Креативный фотограф', 'Удивительные блюда',
  'Быстрая тачка', 'Клубничка на завтрак', 'Ягодный морс', 'Полет над пояжем', 'Удобная обувница',
  'Красивый вид', 'Новейшая Audi', 'Эксклюзивные блюда', 'Сашими из котика', 'Теплая обувка',
  'Вид из эллюминатора', 'Хоровое исполнение', 'Ретро', 'Обуная подсветка', 'Пальмовая роща',
  'Салатик', 'Закат на пляже', 'Крабик', 'Суперский концерт', 'Бегемоты ваши друзья'];

const getRandomInt = (min, max) => Math.round(Math.random() * (max - min) + min);

const createRandomIdGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentId = getRandomInt(min, max);

    while (previousValues.includes(currentId)) {
      currentId = getRandomInt(min, max);
    }
    previousValues.push(currentId);
    return currentId;
  };
};

const getRandomMessage = () => {
  const generateMessageId = createRandomIdGenerator(0, 5);
  return messages[generateMessageId()];
};

const createComment = () => {
  const num = getRandomInt(1, 6);
  const generateCommentId = createRandomIdGenerator(0, 1000);
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${num}.svg`,
    message: Array.from({length: getRandomInt(1, 2)}, getRandomMessage),
    name: names[getRandomInt(0, 24)]
  };
};

const createPhoto = () => {
  const generatePhotoId = createRandomIdGenerator(1, 25);
  const photoId = generatePhotoId();
  return{
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: descriptions[photoId - 1],
    likes: getRandomInt(15, 200),
    comments: Array.from({length: getRandomInt(0, 30)}, createComment)
  };
};

Array.from({length: 25}, createPhoto);
