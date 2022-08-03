import React from "react";

type Props = {
  placeholder: string;
  value: string;
  checkValidInput: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  callback: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const InputBox: React.FC<Props> = ({
  placeholder,
  value,
  checkValidInput,
  callback,
}) => (
  <div>
    <input
      className="userInputBox"
      type="text"
      pattern="[0-9]*"
      maxLength={10}
      placeholder={placeholder}
      value={value}
      onChange={checkValidInput}
      onKeyDown={callback}
    />
  </div>
);

export default InputBox;
