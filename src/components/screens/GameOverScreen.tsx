import React from "react";

type Props = {
  score: number;
  callBack: () => void;
};

const GameOverScreen: React.FC<Props> = ({ score, callBack }) => {
  return (
    <>
      <div>
        <h2 className="endingMessage">
          Your score is {score}! Why not play again?
        </h2>
      </div>
      <div>
        {" "}
        <button onClick={callBack}> Play Again </button>
      </div>
    </>
  );
};

export default GameOverScreen;
