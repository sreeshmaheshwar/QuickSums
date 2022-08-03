import React from "react";

type Props = {
  placeholder: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
};

const InputBox: React.FC<Props> = ({
  placeholder,
  value,
  handleChange,
  handleKeyDown,
}) => (
  <div>
    <input
      className="userInputBox"
      type="text"
      pattern="[0-9]*"
      maxLength={10}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  </div>
);

export default InputBox;
