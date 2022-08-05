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
interval [l, r] for integers l and r.
*/
const generateRandomIntegerInRange = (l: number, r: number) =>
  Math.floor(Math.random() * (r - l + 1)) + l;

/*
if the relative proximity of the subtrahend to the minuend
is too small, the question will be uncharacteristically easy.
For example, consider a "difficult" subtraction with numbers
greater than 600: a subtraction is "650 - 645" would not
 correspond to the desired difficulty. Hence, we fix the
maximum ratio of the subtrahend to the minuend to avoid this.
*/
const MAX_SUBTRAHEND_MINUEND_RATIO = 0.8;

/*
returns a random subtraction corresponding the the given difficulty
measure of [minNumber, maxNumber]. Note that the minuend should not
be too small, as may cause a delay in generating a corresponding
subtrahend, so we enforce that it lies in the upper half of the 
interval. We further enforce that the subtrahend is not a multiple
of ten, as this may lead to an uncharacteristically easy question.
*/
const generateRandomSubtraction = (
  minNumber: number,
  maxNumber: number
): Question => {
  const avg = Math.floor((minNumber + maxNumber) / 2);
  const minuend = generateRandomIntegerInRange(avg, maxNumber);
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
measure of [minNumber, maxNumber]. We enforce that both summands are
not multiples of ten, as this may lead to too easy a question.
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
