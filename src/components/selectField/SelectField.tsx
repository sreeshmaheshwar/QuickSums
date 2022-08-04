import React from "react";
import Select from "react-select";
import DropDownOption from "../../types/DropDownOption";
import "./SelectField.css";

type Props = {
  options: DropDownOption[];
  value: DropDownOption | null;
  setValue: any;
};

const SelectField: React.FC<Props> = ({ options, value, setValue }) => {
  return (
    <Select<DropDownOption>
      className="selection"
      value={value}
      getOptionLabel={(option) => option.label}
      getOptionValue={(option) => option.value}
      options={options}
      onChange={(e) => setValue(e)}
      isSearchable={false}
      theme={(theme) => ({
        ...theme,
        borderRadius: 5,
        colors: {
          ...theme.colors,
          neutral5: "#444545",
          neutral20: "#444545",
          neutral0: "#c1cdd9",
        },
      })}
    />
  );
};

export default SelectField;
