import React, { useState } from "react";
// Components
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import QuestionPrompt from "./components/QuestionPrompt";
import QuestionStatistics from "./components/QuestionStatistics";
// Types
import { Question, QuestionDifficulty } from "./question-generation/fetchQuestions";
// Question Generation
import fetchQuestions from "./question-generation/fetchQuestions";
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

const initialPlaceholder: string = "Enter answer, e.g. 42";

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

    const generatedQuestions = await fetchQuestions(NUM_QUESTIONS, BEGINNER); // TODO: allow user to choose difficulty level

    setQuestions(generatedQuestions);
    setQuestionIndex(0);
    setInputBoxValue("");
    setInputBoxPlaceHolder(initialPlaceholder);
    setQuizOngoing(true);
  };

  const endQuiz = () => {
    setQuizOngoing(false);
    setQuizCompleted(true);
  };

  const startCountdown = () => {
    setTimeout(endQuiz, COUNTDOWN_TIME * MILLISECONDS_PER_SECOND);
  };
  
  // check the user-inputted answer against the correct answer, starting countdown if nevessary
  const checkUserAnswer = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      e.target.value === questions[questionIndex].correctAnswer
    ) {
      setInputBoxValue("");
      setInputBoxPlaceHolder("");
      if (questionIndex === 0) {
        startCountdown();
      }
      setQuestionIndex(questionIndex + 1);
    }
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
        {quizOngoing && (
          <QuestionStatistics questionsAnswered={questionIndex} />
        )}
        {quizOngoing && (
          <QuestionPrompt questionString={questions[questionIndex].prompt} />
        )}
        {quizOngoing && (
          <InputBox
            placeholder={inputBoxPlaceholder}
            value={inputBoxValue}
            handleKeyDown={checkUserAnswer}
            handleChange={(e) => {
              setInputBoxValue((v) =>
                e.target.validity.valid ? e.target.value : v
              );
            }}
          />
        )}
      </Wrapper>
    </>
  )
};

export default App;
