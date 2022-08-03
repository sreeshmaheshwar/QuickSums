import React, { useState } from "react";
import QuestionStatistics from "../QuestionStatistics";
import QuestionPrompt from "../QuestionPrompt";
import InputBox from "../InputBox";
import Question from "../../types/Question";

const MILLISECONDS_PER_SECOND = 1000;

type Props = {
  questions: Question[];
  questionIndex: number;
  incrementQuestionIndex: () => void;
  countdownTime: number;
  endGame: () => void;
};

const GameScreen: React.FC<Props> = ({
  questions,
  questionIndex,
  incrementQuestionIndex,
  countdownTime,
  endGame,
}) => {
  const [inputBoxValue, setInputBoxValue] = useState<string>("");
  const [inputBoxPlaceholder, setInputBoxPlaceHolder] = useState<string>(
    "Enter answer, e.g. 42"
  );

  const startCountdown = () => {
    setTimeout(endGame, countdownTime * MILLISECONDS_PER_SECOND);
  };

  const checkInputtedAnswer = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key == "Enter" &&
      e.target.value === questions[questionIndex].correctAnswer
    ) {
      setInputBoxValue("");
      setInputBoxPlaceHolder("");
      if (questionIndex === 0) startCountdown();
      incrementQuestionIndex();
    }
  };

  return (
    <>
      <QuestionStatistics questionsAnswered={questionIndex} />
      <QuestionPrompt questionString={questions[questionIndex].prompt} />
      <InputBox
        placeholder={inputBoxPlaceholder}
        value={inputBoxValue}
        handleKeyDown={checkInputtedAnswer}
        handleChange={(e) => {
          setInputBoxValue((v) =>
            e.target.validity.valid ? e.target.value : v
          );
        }}
      />
    </>
  );
};

export default GameScreen;
