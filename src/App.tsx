import React, { useState } from "react";
// Components
import Header from "./components/Header";
import QuestionStatistics from "./components/QuestionStatistics";
import QuestionPrompt from "./components/QuestionPrompt";
import InputBox from "./components/InputBox";
// Types
import { Question, QuestionDifficulty } from "./generator/questionGenerator";
// Question Generation
import fetchQuestions from "./generator/questionGenerator";
// Styles
import { GlobalStyle, Wrapper } from "./App.styles";

const NUM_QUESTIONS = 1000;
const COUNTDOWN_TIME = 10;
const MILLISECONDS_PER_SECOND = 1000;

const NOVICE: QuestionDifficulty = {
  minNumber: 1,
  maxNumber: 10,
  additionOnly: true,
};

const BEGINNER: QuestionDifficulty = {
  minNumber: 2,
  maxNumber: 20,
  additionOnly: false,
};

const INTERMEDIATE: QuestionDifficulty = {
  minNumber: 5,
  maxNumber: 50,
  additionOnly: false,
};

const ADVANCED: QuestionDifficulty = {
  minNumber: 50,
  maxNumber: 200,
  additionOnly: false,
};

const App = () => {
  const [quizOngoing, setQuizOngoing] = useState<boolean>(false);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [inputBoxValue, setInputBoxValue] = useState<string>("");
  const [inputBoxPlaceholder, setInputBoxPlaceHolder] = useState<string>("");

  const startQuiz = async () => {
    setQuizCompleted(false);
    setQuizOngoing(false);

    const generatedQuestions = await fetchQuestions(NUM_QUESTIONS, NOVICE); // TODO: allow user to choose difficulty level

    setQuestions(generatedQuestions);
    setQuestionIndex(0);
    setInputBoxValue("");
    setInputBoxPlaceHolder("Enter answer, e.g. 42");
    setQuizOngoing(true);
  };

  const endQuiz = () => {
    setQuizOngoing(false);
    setQuizCompleted(true);
  };

  const startCountdown = () => {
    setTimeout(endQuiz, COUNTDOWN_TIME * MILLISECONDS_PER_SECOND);
  };

  const checkUserAnswer = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      event.target.value === questions[questionIndex].correctAnswer
    ) {
      setInputBoxValue("");
      setInputBoxPlaceHolder("");
      if (questionIndex === 0) {
        startCountdown();
      }
      setQuestionIndex(questionIndex + 1);
    }
  };

  const checkValidNumberEntered = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    setInputBoxValue((val) =>
      event.target.validity.valid ? event.target.value : val
    );
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        {quizCompleted && (
          <h2 className="endingMessage">
            Your score is {questionIndex}! Why not play again?
          </h2>
        )}
        {!quizOngoing && (
          <button className="start" onClick={startQuiz}>
            Start Quiz
          </button>
        )}
        {quizOngoing && QuestionStatistics(questionIndex)}
        {quizOngoing && QuestionPrompt(questions[questionIndex].prompt)}
        {quizOngoing && (
          <InputBox
            placeholder={inputBoxPlaceholder}
            value={inputBoxValue}
            callback={checkUserAnswer}
            checkValidInput={checkValidNumberEntered}
          />
        )}
      </Wrapper>
    </>
  );
};

export default App;
