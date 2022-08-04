import React from "react";
import "./GameStatistics.css";

const getStatistics = (questionsAnswered: number) => {
  switch (questionsAnswered) {
    case 0:
      return "Answer a question to start the countdown!";
    case 1:
      return "1 question answered";
    default:
      return `${questionsAnswered} questions answered`;
  }
};

type Props = {
  questionsAnswered: number;
};

const GameStatistics: React.FC<Props> = ({ questionsAnswered }) => (
  <div>
    <p className="statistics">{getStatistics(questionsAnswered)}</p>
  </div>
);

export default GameStatistics;
