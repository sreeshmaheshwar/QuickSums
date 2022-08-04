import React from "react";
import "./QuestionPrompt.css";

type Props = {
  questionString: string;
};

const QuestionPrompt: React.FC<Props> = ({ questionString }) => (
  <div>
    <p className="question"> {questionString} </p>
  </div>
);

export default QuestionPrompt;
