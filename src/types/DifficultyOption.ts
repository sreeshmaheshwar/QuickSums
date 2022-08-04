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
    minNumber: 1,
    maxNumber: 10,
    additionOnly: true,
  },
  Beginner: {
    minNumber: 2,
    maxNumber: 20,
    additionOnly: false,
  },
  Intermediate: {
    minNumber: 20,
    maxNumber: 80,
    additionOnly: false,
  },
  Advanced: {
    minNumber: 50,
    maxNumber: 200,
    additionOnly: false,
  },
};

export default DifficultyOption;
