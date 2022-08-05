import { PropsWithChildren } from "react";
import Select from "react-select";
import "./DropDownMenu.css";

type Props<T> = {
  choices: readonly T[];
  handleChange: (selection: T) => void;
};

function DropDownMenu<T extends string>({
  choices,
  handleChange,
}: PropsWithChildren<Props<T>>) {
  return (
    <Select
      className="selection"
      options={choices.map((val) => ({
        value: val,
        label: val,
      }))}
      onChange={(e) => {
        if (e) handleChange(e.value);
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
}

export default DropDownMenu;
