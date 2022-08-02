import React from "react";

type Props = {
  boxPlaceholder: string;
  boxValue: string;
  checkValidInput: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  checkUserAnswer: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const InputBox: React.FC<Props> = ({
  boxPlaceholder,
  boxValue,
  checkValidInput,
  checkUserAnswer,
}) => (
  <div>
    <input
      type="text"
      pattern="[0-9]*"
      maxLength={10}
      placeholder={boxPlaceholder}
      value={boxValue}
      onChange={checkValidInput}
      onKeyDown={checkUserAnswer}
    />
  </div>
);

export default InputBox;
