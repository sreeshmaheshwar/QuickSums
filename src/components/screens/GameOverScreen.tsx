import React from "react";

type Props = {
  score: number;
  playAgain: () => void;
};

const GameOverScreen: React.FC<Props> = ({ score, playAgain }) => {
  return (
    <>
      <div>
        <h2 className="endingMessage">
          Your score is {score}! Why not play again?
        </h2>
      </div>
      <div>
        {" "}
        <button onClick={playAgain}> Play Again </button>
      </div>
    </>
  );
};

export default GameOverScreen;
