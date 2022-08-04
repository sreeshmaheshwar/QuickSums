import { useState } from "react";
import PageHeader from "./components/header/Header";
import GameOverScreen from "./screens/gameOverScreen/GameOverScreen";
import GameScreen from "./screens/gameScreen/GameScreen";
import JoinScreen from "./screens/joinScreen/JoinScreen";
import DifficultyOption from "./types/DifficultyOption";
import Question from "./types/Question";
import TimeControlOption from "./types/TimeControlOption";
import fetchQuestions from "./util/fetchQuestions";
import styled from "styled-components";
import "./App.css"

const MAX_QUESTIONS = 1000;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [joinScreen, setJoinScreen] = useState<boolean>(true);
  const [gameScreen, setGameScreen] = useState<boolean>(false);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const [difficulty, setDifficulty] = useState<DifficultyOption | null>(null);
  const [timeControl, setTimeControl] = useState<TimeControlOption | null>(null);

  const startGame = async () => {
    if (difficulty && timeControl) {
      const generatedQuestions = await fetchQuestions(
        MAX_QUESTIONS,
        difficulty
      );
      setQuestions(generatedQuestions);
      setQuestionIndex(0);
      setJoinScreen(false);
      setGameScreen(true);
    }
  };

  return (
    <div className="main-container">
      <Wrapper>
        <PageHeader />
        {joinScreen ? (
          <JoinScreen
            callBack={startGame}
            setDifficultyOption={setDifficulty}
            setTimeControlOption={setTimeControl}
          />
        ) : gameScreen ? (
          <GameScreen
            questions={questions}
            questionIndex={questionIndex}
            incrementQuestionIndex={() => setQuestionIndex(questionIndex + 1)}
            timeControl={timeControl}
            endGame={() => setGameScreen(false)}
          />
        ) : (
          <GameOverScreen
            score={questionIndex}
            difficulty={difficulty!}
            timeControl={timeControl!}
            playAgain={startGame}
            backToSettings={() => setJoinScreen(true)}
          />
        )}
      </Wrapper>
    </div>
  );
};

export default App;
