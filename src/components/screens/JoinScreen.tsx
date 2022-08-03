import React from "react";

type Props = {
  callBack: () => void;
};

const JoinScreen: React.FC<Props> = ({ callBack }) => {
  return (
    <button className="start" onClick={callBack}>
      Start Quiz
    </button>
  );
};

export default JoinScreen;
