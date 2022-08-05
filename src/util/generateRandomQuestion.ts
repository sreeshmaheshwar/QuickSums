/*
The generation of random arithmetic questions in this application
is (currently) achieved using JavaScript's Math.Random() function.
Occurances of "Math.random()" in the source code below may be
replaced with a different pseudo-random generator with approximate
uniform distribution on the interval [0, 1) if so desired.
*/

import Question from "../types/Question";

/*
returns an "uniformly" random integer in the (inclusive)
interval [l, r] for integers l and r
*/
const generateRandomIntegerInRange = (l: number, r: number) =>
  Math.floor(Math.random() * (r - l + 1)) + l;

/*
We fix the maximum ratio of the subtrahend to the minuend,
since if the subtrahend is too close to the minuend, the 
question will be uncharacteristically easy. For example, 
consider a "difficult" subtraction involving numbers greater 
than 800: a subtraction of "850 - 845" would not correspond 
to this desired difficulty.
*/
const MAX_SUBTRAHEND_MINUEND_RATIO = 0.8;

/*
returns a random subtraction corresponding to the given difficulty
measure of [minNumber, maxNumber]. 
We enforce that the subtrahend is not a multiple of ten, as this 
may lead to too easy a question, and also that the minuend roughly 
lies in the upper half of the interval provided, for similar reasons.
*/
const generateRandomSubtraction = (
  minNumber: number,
  maxNumber: number
): Question => {
  const average = Math.floor((minNumber + maxNumber) / 2);
  const minuend = generateRandomIntegerInRange(average, maxNumber);
  var subtrahend;
  do {
    subtrahend = generateRandomIntegerInRange(
      minNumber,
      Math.round(minuend * MAX_SUBTRAHEND_MINUEND_RATIO)
    );
  } while (subtrahend % 10 === 0);
  return {
    prompt: `${minuend} - ${subtrahend}`,
    correctAnswer: `${minuend - subtrahend}`,
  };
};

/*
returns a random addition corresponding the the given difficulty
measure of [minNumber, maxNumber]. 
We enforce that both summands are not multiples of ten, as this 
may lead to too easy a question.
*/
const generateRandomAddition = (
  minNumber: number,
  maxNumber: number
): Question => {
  var firstSummand, secondSummand;
  do {
    firstSummand = generateRandomIntegerInRange(minNumber, maxNumber);
    secondSummand = generateRandomIntegerInRange(minNumber, maxNumber);
  } while (firstSummand % 10 === 0 && secondSummand % 10 === 0);
  return {
    prompt: `${firstSummand} + ${secondSummand}`,
    correctAnswer: `${firstSummand + secondSummand}`,
  };
};

const generateRandomQuestion = (
  minNumber: number,
  maxNumber: number,
  isSubtraction: boolean
): Question => {
  return isSubtraction
    ? generateRandomSubtraction(minNumber, maxNumber)
    : generateRandomAddition(minNumber, maxNumber);
};

export default generateRandomQuestion;
