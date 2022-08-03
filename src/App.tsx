import { useState } from "react";
// Components
import PageHeader from "./components/Header";
import GameOverScreen from "./components/screens/GameOverScreen";
// Types
import {
  Question,
  QuestionDifficulty,
} from "./question-generation/fetchQuestions";
// Question Generation
import fetchQuestions from "./question-generation/fetchQuestions";
// Styles
import { GlobalStyle, Wrapper } from "./App.styles";
import JoinScreen from "./components/screens/JoinScreen";
import GameScreen from "./components/screens/GameScreen";

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
  const [joinScreen, setJoinScreen] = useState<boolean>(true);
  const [gameScreen, setGameScreen] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const startGame = async () => {
    const generatedQuestions = await fetchQuestions(NUM_QUESTIONS, NOVICE);
    setQuestions(generatedQuestions);
    setQuestionIndex(0);
    setJoinScreen(false);
    setGameScreen(true);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PageHeader />
        {joinScreen ? (
          <JoinScreen callBack={startGame} />
        ) : gameScreen ? (
          <GameScreen
            questions={questions}
            questionIndex={questionIndex}
            incrementQuestionIndex={() => setQuestionIndex(questionIndex + 1)}
            callBack={() => setGameScreen(false)}
          />
        ) : (
          <GameOverScreen score={questionIndex} callBack={() => setJoinScreen(true)} />
        )}
      </Wrapper>
    </>
  );
};

export default App;
