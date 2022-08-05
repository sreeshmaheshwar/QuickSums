import React, { useState } from "react";
import GameStatistics from "../../components/gameStatistics/GameStatistics";
import InputBox from "../../components/inputBox/InputBox";
import QuestionPrompt from "../../components/questionPrompt/QuestionPrompt";
import Question from "../../types/Question";
import TimeControlOption, {
  timeControlOptionMap,
} from "../../types/TimeControlOption";

const MILLISECONDS_PER_SECOND = 1000;
const DEFAULT_PLACEHOLDER = "Enter answer, e.g. 42";

type Props = {
  questions: Question[];
  questionIndex: number;
  incrementQuestionIndex: () => void;
  timeControl: TimeControlOption;
  endGame: () => void;
};

const GameScreen: React.FC<Props> = ({
  questions,
  questionIndex,
  incrementQuestionIndex,
  timeControl,
  endGame,
}) => {
  const [inputBoxValue, setInputBoxValue] = useState<string>("");
  const [inputBoxPlaceholder, setInputBoxPlaceHolder] = useState<string>(DEFAULT_PLACEHOLDER);

  const startCountdown = () => {
    setTimeout(
      endGame,
      timeControlOptionMap[timeControl] * MILLISECONDS_PER_SECOND
    );
  };

  const checkInputtedAnswer = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
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
      <GameStatistics questionsAnswered={questionIndex} />
      <QuestionPrompt questionString={questions[questionIndex].prompt} />
      <InputBox
        placeholder={inputBoxPlaceholder}
        value={inputBoxValue}
        handleKeyDown={checkInputtedAnswer}
        handleChange={(e) => {
          setInputBoxValue((val) =>
            e.target.validity.valid ? e.target.value : val
          );
        }}
      />
    </>
  );
};

export default GameScreen;
