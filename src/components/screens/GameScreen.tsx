import React, { useState } from "react";
import QuestionStatistics from "../QuestionStatistics";
import QuestionPrompt from "../QuestionPrompt";
import InputBox from "../InputBox";
import { Question } from "../../question-generation/fetchQuestions";

const COUNTDOWN_TIME = 2;
const MILLISECONDS_PER_SECOND = 1000;

type Props = {
  questions: Question[];
  questionIndex: number;
  incrementQuestionIndex: () => void;
  callBack: () => void;
};

const GameScreen: React.FC<Props> = ({
  questions,
  questionIndex,
  incrementQuestionIndex,
  callBack,
}) => {
  const [inputBoxValue, setInputBoxValue] = useState<string>("");
  const [inputBoxPlaceholder, setInputBoxPlaceHolder] = useState<string>(
    "Enter answer, e.g. 42"
  );

  const startCountdown = () => {
    setTimeout(callBack, COUNTDOWN_TIME * MILLISECONDS_PER_SECOND);
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
