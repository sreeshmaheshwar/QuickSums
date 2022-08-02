import React from "react";

type Props = {
  questionString: string;
};

const QuestionPrompt: React.FC<Props> = ({ questionString }) => (
  <div>
    <p className="question"> {questionString} </p>
  </div>
);

export default QuestionPrompt;
