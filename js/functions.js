function checkLengthLine(string, stringLine) {
  return string.length <= stringLine;
}

checkLengthLine('проверяемая строка', 20);
checkLengthLine('проверяемая строка', 18);
checkLengthLine('проверяемая строка', 10);

function isPalindrome(string) {
  const newString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    reverseString += newString[i];
  }

  return newString === reverseString;
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

function getNumber(string) {
  const newString = !Number.isNaN(string * 10) ? string.toString() : string;
  let num = '';
  for (let i = 0; i < newString.length; i++) {
    if (!Number.isNaN(newString[i] * 10)){
      num += newString[i].trim();
    }
  }

  return parseInt(num, 10);
}

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);
