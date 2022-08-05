import React from "react";
import DropDownMenu from "../../components/dropDownMenu/DropDownMenu";
import DifficultyOption, {
  ALL_DIFFICULTIES
} from "../../types/DifficultyOption";
import TimeControlOption, {
  ALL_TIME_CONTROLS
} from "../../types/TimeControlOption";
import "./JoinScreen.css";

type Props = {
  handleDifficultyChange: (selection: DifficultyOption) => void;
  handleTimeControlChange: (selection: TimeControlOption) => void;
  startGame: () => void;
};

const JoinScreen: React.FC<Props> = ({
  handleDifficultyChange,
  handleTimeControlChange,
  startGame,
}) => {
  return (
    <>
      <p className="difficulty">Difficulty</p>
      <DropDownMenu
        choices={ALL_DIFFICULTIES}
        handleChange={handleDifficultyChange}
      />
      <p className="time-control">Time Control</p>
      <DropDownMenu
        choices={ALL_TIME_CONTROLS}
        handleChange={handleTimeControlChange}
      />
      <button className="start" onClick={startGame}>
        Start Test
      </button>
    </>
  );
};

export default JoinScreen;
