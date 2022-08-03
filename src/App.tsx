import { useState } from "react";
// Components
import PageHeader from "./components/Header";
import GameOverScreen from "./components/screens/GameOverScreen";
// Types
import Question from "./types/Question";
// Question Generation
import fetchQuestions from "./question-generation/fetchQuestions";
// Styles
import { GlobalStyle, Wrapper } from "./App.styles";
import JoinScreen from "./components/screens/JoinScreen";
import GameScreen from "./components/screens/GameScreen";

const MAX_QUESTIONS = 1000;

const App = () => {
  const [joinScreen, setJoinScreen] = useState<boolean>(true);
  const [gameScreen, setGameScreen] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const startGame = async () => {
    const generatedQuestions = await fetchQuestions(MAX_QUESTIONS, "Beginner");
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
            endGame={() => setGameScreen(false)}
          />
        ) : (
          <GameOverScreen
            score={questionIndex}
            playAgain={() => setJoinScreen(true)}
          />
        )}
      </Wrapper>
    </>
  );
};

export default App;
