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


const checkMeetingTime = (startTime, endTime, meetingTime, duration) => {
  function getDate(time, durationMinute) {
    const now = new Date();
    const realDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      ...time.split(':')
    );
    if (durationMinute) {
      realDate.setMinutes(realDate.getMinutes() + durationMinute);
    }
    return realDate;
  }
  const startDate = getDate(startTime);
  const endDate = getDate(endTime);
  const startMeetingDate = getDate(meetingTime);
  const endMeetingDate = getDate(meetingTime, duration);
  return (
    startDate <= startMeetingDate &&
    endMeetingDate <= endDate
  );
};

checkMeetingTime('08:00', '17:30', '14:00', 90); // true
checkMeetingTime('8:0', '10:0', '8:0', 120); // true
checkMeetingTime('08:00', '14:30', '14:00', 90); // false
checkMeetingTime('14:00', '17:30', '08:0', 90); // false
checkMeetingTime('8:00', '17:30', '08:00', 900); // false
checkMeetingTime('08:00', '17:30', '07:30', 90); // false
