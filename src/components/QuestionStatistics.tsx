import React from "react";

const getStatistics = (questionsAnswered: number) => {
  switch (questionsAnswered) {
    case 0:
      return "Answer a question to start the countdown!";
    case 1:
      return "1 question answered";
    default:
      return `${questionsAnswered} questions answered`
      break;
  }
};

type Props = {
  questionsAnswered: number;
};

const QuestionStatistics: React.FC<Props> = ( { questionsAnswered }) => (
  <div>
    <p className="question-statistics">
      {getStatistics(questionsAnswered)}
    </p>
  </div>
);

export default QuestionStatistics;
