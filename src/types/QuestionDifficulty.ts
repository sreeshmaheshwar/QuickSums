export type QuestionDifficulty = {
  minNumber: number;
  maxNumber: number;
  additionOnly: boolean;
};

export const SupportedDifficulties = ["Novice", "Beginner", "Intermediate", "Advanced"] as const;

export type QuestionDifficultyId = typeof SupportedDifficulties[number];

export const IdToDifficulty: Record<QuestionDifficultyId, QuestionDifficulty> =
  {
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
