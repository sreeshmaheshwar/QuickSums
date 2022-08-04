import DifficultyOption, {
  difficultyOptionMap,
} from "../types/DifficultyOption";
import Question from "../types/Question";

/* desired fraction of questions that are subtractions */
const SUBTRACTION_PROBABILITY = 0.35;

/* returns true with probability p, false otherwise */
const generateBooleanWithProbability = (p: number): boolean =>
  Math.random() < p;

/* returns random integer in (inclusive) interval [l, r] */
const generateRandomIntegerInRange = (l: number, r: number) =>
  Math.floor(Math.random() * (r - l + 1)) + l;

var cnt = 0;

const fetchQuestions = async (
  numQuestions: number,
  difficulty: DifficultyOption
) => {
  const { minNumber, maxNumber, additionOnly } =
    difficultyOptionMap[difficulty];
  const questions: Question[] = new Array(numQuestions);
  for (let i = 0; i < numQuestions; ++i) {
    questions[i] = generateRandomQuestion(
      minNumber,
      maxNumber,
      generateBooleanWithProbability(additionOnly ? 0 : SUBTRACTION_PROBABILITY)
    );
  }
  console.log(cnt);
  return questions;
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

const generateRandomAddition = (
  minNumber: number,
  maxNumber: number
): Question => {
  var firstSummand, secondSummand;
  do {
    firstSummand = generateRandomIntegerInRange(minNumber, maxNumber);
    secondSummand = generateRandomIntegerInRange(minNumber, maxNumber);
  } while (firstSummand % 10 === 0 && secondSummand % 10 === 0); // multiples of 10 are too easy
  cnt++;
  return {
    prompt: `${firstSummand} + ${secondSummand}`,
    correctAnswer: `${firstSummand + secondSummand}`,
  };
};

/* ratio of subtrahend (b in a - b) to minuend (a in a - b), such that subtractions are not trivial */
const subtrahendMinuendRatio = 0.8;

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
      Math.round(minuend * subtrahendMinuendRatio)
    );
  } while (subtrahend % 10 == 0); // multiple of 10 is too easy
  cnt--;
  return {
    prompt: `${minuend} - ${subtrahend}`,
    correctAnswer: `${minuend - subtrahend}`,
  };
};

export default fetchQuestions;
