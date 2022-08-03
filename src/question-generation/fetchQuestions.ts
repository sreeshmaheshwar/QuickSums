export type Question = {
    prompt: string;
    correctAnswer: string;
};

export interface QuestionDifficulty {
    minNumber: number;
    maxNumber: number;
    additionOnly: boolean;
};

// TODO: support multiple operators & use additionOnly flag
const fetchQuestions = async (numQuestions: number, difficulty: QuestionDifficulty) => {
    const questions: Question[] = new Array(numQuestions);
    for (let i = 0; i < numQuestions; ++i) {
        questions[i] = generateRandomQuestion(difficulty);
    }
    return questions;
};

// generates a randum integer in the (inclusive) interval [left, right]
const generateRandomNumberInRange = (left: number, right: number) => Math.floor(Math.random() * (right - left + 1)) + left;

const generateRandomQuestion = (difficulty: QuestionDifficulty) : Question => {
    const firstNumber = generateRandomNumberInRange(difficulty.minNumber, difficulty.maxNumber);
    const secondNumber = generateRandomNumberInRange(difficulty.minNumber, difficulty.maxNumber);
    return {
        prompt: `${firstNumber} + ${secondNumber}`,
        correctAnswer: `${firstNumber + secondNumber}`
    }
};

export default fetchQuestions;

