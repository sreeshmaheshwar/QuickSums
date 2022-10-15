import DifficultyOption, {
  difficultyOptionMap,
} from "../types/DifficultyOption";
import Question from "../types/Question";
import generateRandomQuestion from "./generateRandomQuestion";

const NUM_QUESTIONS_GENERATED = 1000;

/* Returns true with probability p, false otherwise. */
const generateBooleanWithProbability = (p: number): boolean =>
  Math.random() < p;

const fetchQuestions = (difficulty: DifficultyOption) => {
  const { minNumber, maxNumber, subtractionPercentage } =
    difficultyOptionMap[difficulty];
  const questions: Question[] = new Array(NUM_QUESTIONS_GENERATED);
  for (let i = 0; i < NUM_QUESTIONS_GENERATED; ++i) {
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
