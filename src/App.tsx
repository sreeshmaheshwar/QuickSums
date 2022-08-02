import React, { useEffect, useRef, useState } from "react";
import logo from "./images/logo.png";
// Components
import QuestionStatistics from "./components/QuestionStatistics";
import QuestionPrompt from "./components/QuestionPrompt";
import InputBox from "./components/InputBox";
import Timer from "./Timer";
// Types
import { Question, QuestionDifficulty } from "./generator/questionGenerator";
// Question Generation
import fetchQuestions from "./generator/questionGenerator";
// Styles
import { GlobalStyle, Wrapper } from "./App.styles";

const NUM_QUESTIONS = 1000;

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
  const [timerOngoing, setTimerOngoing] = useState<boolean>(false);
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
    setTimerOngoing(false);
    setQuizCompleted(true);
  };

  const checkUserAnswer = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      event.target.value === questions[questionIndex].correctAnswer
    ) {
      setInputBoxValue("");
      setInputBoxPlaceHolder("");
      if (questionIndex === 0) setTimerOngoing(true);
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
        <img src={logo} alt="Logo" />
        <h1>QuickSums</h1>
        {quizCompleted && <h2>Your score is {questionIndex}! Why not play again?</h2>}
        {!quizOngoing && (
          <button className="start" onClick={startQuiz}>
            Start Quiz
          </button>
        )}
        {quizOngoing && <QuestionStatistics questionNumber={questionIndex} />}
        {quizOngoing && (
          <QuestionPrompt questionString={questions[questionIndex].prompt} />
        )}
        {quizOngoing && (
          <InputBox
            boxPlaceholder={inputBoxPlaceholder}
            boxValue={inputBoxValue}
            checkUserAnswer={checkUserAnswer}
            checkValidInput={checkValidNumberEntered}
          />
        )}
        {timerOngoing && <Timer endQuiz={endQuiz} />}
      </Wrapper>
    </>
  );
};

export default App;
