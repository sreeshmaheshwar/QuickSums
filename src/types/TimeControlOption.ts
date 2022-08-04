export const ALL_TIME_CONTROLS = [
  "Bullet (10s)",
  "Blitz (20s)",
  "Rapid (45s)",
  "Classic (60s)",
] as const;

type TimeControlOption = typeof ALL_TIME_CONTROLS[number];

export const timeControlOptionMap: Record<TimeControlOption, number> = {
  "Bullet (10s)": 10,
  "Blitz (20s)": 20,
  "Rapid (45s)": 45,
  "Classic (60s)": 60,
};

export default TimeControlOption;
