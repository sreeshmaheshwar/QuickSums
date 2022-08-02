import React, { useState } from "react";
import logo from "./images/logo.png";
// Components
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
  const [quizOngoing, setQuizOngoing] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [inputBoxValue, setInputBoxValue] = useState("");
  const [inputBoxPlaceholder, setInputBoxPlaceHolder] = useState("");
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setGameOver(false);
    setQuizOngoing(false);

    const generatedQuestions = await fetchQuestions(NUM_QUESTIONS, NOVICE); // TODO: allow user to choose difficulty level

    setQuestions(generatedQuestions);
    setQuestionIndex(0);
    setInputBoxValue("");
    setInputBoxPlaceHolder("Enter answer, e.g. 42");
    setQuizOngoing(true);
  };

  const checkUserAnswer = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      event.target.value === questions[questionIndex].correctAnswer
    ) {
      setInputBoxValue("");
      setInputBoxPlaceHolder("");
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
      </Wrapper>
    </>
  );
};

export default App;
