import React from "react";
import "./GameOverScreen.css";

type Props = {
  score: number;
  difficulty: string;
  timeControl: string;
  playAgain: () => void;
  backToSettings: () => void;
};

const GameOverScreen: React.FC<Props> = ({
  score,
  difficulty,
  timeControl,
  playAgain,
  backToSettings,
}) => {
  return (
    <>
      <h2 className="congratulations">Congratulations!</h2>
      <h2 className="middle-result">
        Your Score: <span className="player-result">{score}</span>
      </h2>
      <h2 className="middle-result">
        Difficulty: <span className="player-result">{difficulty}</span>
      </h2>
      <h2 className="bottom-result">
        Time Control: <span className="player-result">{timeControl}</span>
      </h2>
      <button className="final-button" onClick={playAgain}>
        Play Again (Same Settings)
      </button>
      <button className="final-button" onClick={backToSettings}>
        Back to Settings
      </button>
    </>
  );
};

export default GameOverScreen;
