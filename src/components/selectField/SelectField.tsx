import React from "react";
import Select from "react-select";
import "./SelectField.css";

type Props = {
  choices: readonly string[];
  setValue: (e: string | null) => void;
};

const SelectField: React.FC<Props> = ({ choices, setValue }) => {
  return (
    <Select
      className="selection"
      options={choices.map((val) => ({
        value: val,
        label: val,
      }))}
      onChange={(e) => {
        if (e) setValue(e.value);
      }}
      isSearchable={false}
      theme={(theme) => ({
        ...theme,
        borderRadius: 5,
        colors: {
          ...theme.colors,
          neutral20: "#327cad",
          neutral0: "#c1cdd9",
        },
      })}
    />
  );
};

export default SelectField;
