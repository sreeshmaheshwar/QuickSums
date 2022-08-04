import { useState } from "react";
import PageHeader from "./components/header/Header";
import GameOverScreen from "./screens/gameOverScreen/GameOverScreen";
import GameScreen from "./screens/gameScreen/GameScreen";
import JoinScreen from "./screens/joinScreen/JoinScreen";
import { GlobalStyle, GlobalWrapper } from "./globalStyles";
import DropDownOption from "./types/DropDownOption";
import Question from "./types/Question";
import fetchQuestions from "./util/fetchQuestions";

const MAX_QUESTIONS = 1000;

const App = () => {
  const [joinScreen, setJoinScreen] = useState<boolean>(true);
  const [gameScreen, setGameScreen] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DropDownOption | null>(null);
  const [selectedTimeControl, setSelectedTimeControl] =
    useState<DropDownOption | null>(null);

  const startGame = async () => {
    const generatedQuestions = await fetchQuestions(
      MAX_QUESTIONS,
      selectedDifficulty?.value
    );
    setQuestions(generatedQuestions);
    setQuestionIndex(0);
    setJoinScreen(false);
    setGameScreen(true);
  };

  return (
    <>
      <GlobalStyle />
      <GlobalWrapper>
        <PageHeader />
        {joinScreen ? (
          <JoinScreen
            callBack={startGame}
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
            selectedTimeControl={selectedTimeControl}
            setSelectedTimeControl={setSelectedTimeControl}
          />
        ) : gameScreen ? (
          <GameScreen
            questions={questions}
            questionIndex={questionIndex}
            incrementQuestionIndex={() => setQuestionIndex(questionIndex + 1)}
            countdownTime={selectedTimeControl?.value}
            endGame={() => setGameScreen(false)}
          />
        ) : (
          <GameOverScreen
            score={questionIndex}
            playAgain={() => setJoinScreen(true)}
          />
        )}
      </GlobalWrapper>
    </>
  );
};

export default App;
