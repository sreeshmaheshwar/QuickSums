import Question from "../types/Question";
import QuestionInfo from "../types/QuestionInfo";

// TODO: support multiple operators & use additionOnly flag
const fetchQuestions = async (
  numQuestions: number,
  difficulty: QuestionInfo
) => {
  const questions: Question[] = new Array(numQuestions);
  for (let i = 0; i < numQuestions; ++i) {
    questions[i] = generateRandomQuestion(difficulty);
  }
  return questions;
};

// generates a randum integer in the (inclusive) interval [left, right]
const generateRandomNumberInRange = (left: number, right: number) =>
  Math.floor(Math.random() * (right - left + 1)) + left;

const generateRandomQuestion = (difficulty: QuestionInfo): Question => {
  const { minNumber, maxNumber } = difficulty;
  const firstNumber = generateRandomNumberInRange(minNumber, maxNumber);
  const secondNumber = generateRandomNumberInRange(minNumber, maxNumber);
  return {
    prompt: `${firstNumber} + ${secondNumber}`,
    correctAnswer: `${firstNumber + secondNumber}`,
  };
};

export default fetchQuestions;
