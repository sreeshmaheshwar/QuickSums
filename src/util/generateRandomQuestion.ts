import Question from "../types/Question";

const SUBTRAHEND_MINUEND_RATIO = 0.8;

const generateRandomIntegerInRange = (l: number, r: number) =>
  Math.floor(Math.random() * (r - l + 1)) + l;

const generateRandomSubtraction = (
  minNumber: number,
  maxNumber: number
): Question => {
  const avg = Math.floor((minNumber + maxNumber) / 2);
  const minuend = generateRandomIntegerInRange(avg, maxNumber); // minuend should not be too small
  var subtrahend;
  do {
    subtrahend = generateRandomIntegerInRange(
      minNumber,
      Math.round(minuend * SUBTRAHEND_MINUEND_RATIO)
    );
  } while (subtrahend % 10 == 0); // multiple of 10 is too easy
  return {
    prompt: `${minuend} - ${subtrahend}`,
    correctAnswer: `${minuend - subtrahend}`,
  };
};

const generateRandomAddition = (
  minNumber: number,
  maxNumber: number
): Question => {
  var firstSummand, secondSummand;
  do {
    firstSummand = generateRandomIntegerInRange(minNumber, maxNumber);
    secondSummand = generateRandomIntegerInRange(minNumber, maxNumber);
  } while (firstSummand % 10 === 0 && secondSummand % 10 === 0); // multiples of 10 are too easy
  return {
    prompt: `${firstSummand} + ${secondSummand}`,
    correctAnswer: `${firstSummand + secondSummand}`,
  };
};

const generateRandomQuestion = (
  minNumber: number,
  maxNumber: number,
  isSubtraction: boolean
): Question => {
  return isSubtraction
    ? generateRandomSubtraction(minNumber, maxNumber)
    : generateRandomAddition(minNumber, maxNumber);
};

export default generateRandomQuestion;
