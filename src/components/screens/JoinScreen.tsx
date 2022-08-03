import React, { useState } from "react";
import { SupportedDifficulties } from "../../types/QuestionDifficulty";
import SelectField from "../SelectField";
import DropDownOption, {
  difficultyOptions,
  timeControlOptions,
} from "../../types/DropDownOption";

type Props = {
  callBack: () => void;
  selectedDifficulty: DropDownOption | null;
  setSelectedDifficulty: any;
  selectedTimeControl: DropDownOption | null;
  setSelectedTimeControl: any;
};

const JoinScreen: React.FC<Props> = ({
  callBack,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedTimeControl,
  setSelectedTimeControl,
}) => {
  return (
    <>
      <p className="choice">Select Difficulty</p>
      <SelectField
        options={difficultyOptions}
        value={selectedDifficulty}
        setValue={setSelectedDifficulty}
      />
      <p className="choice">Select Time Control</p>
      <SelectField
        options={timeControlOptions}
        value={selectedTimeControl}
        setValue={setSelectedTimeControl}
      />
      <button
        className="start"
        onClick={() => {
          if (selectedDifficulty && selectedTimeControl) callBack();
        }}
      >
        Start Test
      </button>
    </>
    /* <SelectField label="Difficulty" options={SupportedDifficulties} />
      <SelectField label="Time control" options={["15s", "30s", "60s"]} /> */
  );
};

export default JoinScreen;
