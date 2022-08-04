import React from "react";
import SelectField from "../../components/selectField/SelectField";
import { ALL_DIFFICULTIES } from "../../types/DifficultyOption";
import { ALL_TIME_CONTROLS } from "../../types/TimeControlOption";
import "./JoinScreen.css";

type Props = {
  callBack: () => void;
  setDifficultyOption: any;
  setTimeControlOption: any;
};

const JoinScreen: React.FC<Props> = ({
  callBack,
  setDifficultyOption,
  setTimeControlOption,
}) => {
  return (
    <>
      <p className="choice">Difficulty</p>
      <SelectField choices={ALL_DIFFICULTIES} setValue={setDifficultyOption} />
      <p className="choice">Time Control</p>
      <SelectField
        choices={ALL_TIME_CONTROLS}
        setValue={setTimeControlOption}
      />
      <button className="start" onClick={callBack}>
        Start Test
      </button>
    </>
  );
};

export default JoinScreen;
