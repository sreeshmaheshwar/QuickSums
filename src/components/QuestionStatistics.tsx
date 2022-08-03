const getStatistics = (questionNumber: number) => {
  if (questionNumber === 0) {
    return "Answer a question to start the countdown!";
  } else if (questionNumber === 1) {
    return "1 question answered";
  } else {
    return `${questionNumber} questions answered`;
  }
};

const QuestionStatistics = (questionNumber: number) => (
  <div>
    <p className="question-statistics"> {getStatistics(questionNumber)} </p>
  </div>
);

export default QuestionStatistics;
