const getStatistics = (questionsAnswered: number) => {
  if (questionsAnswered === 0) {
    return "Answer a question to start the countdown!";
  } else if (questionsAnswered === 1) {
    return "1 question answered";
  } else {
    return `${questionsAnswered} questions answered`;
  }
};

const QuestionStatistics = (prop: { questionsAnswered: number }) => (
  <div>
    <p className="question-statistics">
      {" "}
      {getStatistics(prop.questionsAnswered)}{" "}
    </p>
  </div>
);

export default QuestionStatistics;
