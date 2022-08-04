import React from "react";
import "./GameOverScreen.css";

type Props = {
  score: number;
  playAgain: () => void;
  backToSettings: () => void;
};

const GameOverScreen: React.FC<Props> = ({
  score,
  playAgain,
  backToSettings,
}) => {
  return (
    <>
      <h2 className="ending-message">
        Your score is {score}! Why not play again?
      </h2>
      <button className="final-button" onClick={playAgain}>
        {" "}
        Play Again (Same Settings){" "}
      </button>
      <button className="final-button" onClick={backToSettings}>
        {" "}
        Back to Settings{" "}
      </button>
    </>
  );
};

export default GameOverScreen;
