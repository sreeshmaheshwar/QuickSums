import DifficultyOption, {
  difficultyOptionMap,
} from "../types/DifficultyOption";
import Question from "../types/Question";
import generateRandomQuestion from "./generateRandomQuestion";

const MAX_QUESTIONS = 1000;

/* returns true with probability p, false otherwise */
const generateBooleanWithProbability = (p: number): boolean =>
  Math.random() < p;

const fetchQuestions = async (difficulty: DifficultyOption) => {
  const { minNumber, maxNumber, subtractionPercentage } =
    difficultyOptionMap[difficulty];
  const questions: Question[] = new Array(MAX_QUESTIONS);
  for (let i = 0; i < MAX_QUESTIONS; ++i) {
    do {
      questions[i] = generateRandomQuestion(
        minNumber,
        maxNumber,
        generateBooleanWithProbability(subtractionPercentage)
      );
    } while (i > 0 && questions[i].prompt === questions[i - 1].prompt);
  }
  return questions;
};

export default fetchQuestions;
