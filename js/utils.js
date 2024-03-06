const getRandomInt = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

const createRandomIdGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentId = getRandomInt(min, max);

    if (previousValues.length >= (max - min + 1)) {
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

export { getRandomInt, createRandomIdGenerator, isEscapeKey };
