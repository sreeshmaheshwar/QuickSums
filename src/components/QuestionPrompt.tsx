const QuestionPrompt = (prop: { questionString: string }) => (
  <div>
    <p className="question"> {prop.questionString} </p>
  </div>
);

export default QuestionPrompt;
