import QuestionInfo from "./QuestionInfo";

export const ALL_DIFFICULTIES = [
  "Novice",
  "Beginner",
  "Intermediate",
  "Advanced",
] as const;

type DifficultyOption = typeof ALL_DIFFICULTIES[number];

export const difficultyOptionMap: Record<DifficultyOption, QuestionInfo> = {
  Novice: {
    // addition only, small numbers
    minNumber: 1,
    maxNumber: 10,
    subtractionPercentage: 0,
  },
  Beginner: {
    // introduces subtraction
    minNumber: 2,
    maxNumber: 20,
    subtractionPercentage: 0.5,
  },
  Intermediate: {
    // introduces large numbers
    minNumber: 20,
    maxNumber: 80,
    subtractionPercentage: 0.4,
  },
  Advanced: {
    minNumber: 50,
    maxNumber: 200,
    subtractionPercentage: 0.5,
  },
};

export default DifficultyOption;
