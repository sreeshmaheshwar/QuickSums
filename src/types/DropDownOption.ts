type DropDownOption = {
  label: string;
  value: any;
};

export const difficultyOptions: DropDownOption[] = [
  {
    label: "Novice",
    value: {
      minNumber: 1,
      maxNumber: 10,
      additionOnly: true,
    },
  },
  {
    label: "Beginner",
    value: {
      minNumber: 2,
      maxNumber: 20,
      additionOnly: false,
    },
  },
  {
    label: "Intermediate",
    value: {
      minNumber: 20,
      maxNumber: 80,
      additionOnly: false,
    },
  },
  {
    label: "Advanced",
    value: {
      minNumber: 50,
      maxNumber: 200,
      additionOnly: false,
    },
  },
];

export const timeControlOptions: DropDownOption[] = [
  {
    label: "Bullet (10s)",
    value: 10,
  },
  {
    label: "Blitz (20s)",
    value: 20,
  },
  {
    label: "Rapid (45s)",
    value: 45,
  },
  {
    label: "Classic (60s)",
    value: 60,
  },
];

export default DropDownOption;
