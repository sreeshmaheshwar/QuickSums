import { useEffect, useRef } from "react";

const COUNTDOWN_TIME = 10;
const MILLISECONDS_PER_SECOND = 1000;

type Props = {
  endQuiz: () => void;
};

const Timer: React.FC<Props> = ({ endQuiz }) => {
  const timer = useRef<any>(null);

  const timerEnd = () => {
    if (timer.current) {
      window.clearTimeout(timer.current);
    }
    endQuiz();
  };

  useEffect(() => {
    setTimeout(() => {}, 0);
    timer.current = setTimeout(
      timerEnd,
      COUNTDOWN_TIME * MILLISECONDS_PER_SECOND
    );
  }, []);

  return <></>;
};

export default Timer;
