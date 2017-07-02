import { cons } from 'hexlet-pairs';
import { welcome, gameProcess } from '..';

const rule = 'Answer "yes", if number is prime otherwise answer "no"';

const isPrime = (num) => {
  let counter = 2;
  while (num % counter !== 0) {
    counter += 1;
  }
  return counter === num;
};

const generateAnswer = (number, checkNumber) => {
  let result;
  if (checkNumber) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const generateTask = () => {
  const expression = Math.round(Math.random() * 100);
  const result = generateAnswer(expression, isPrime(expression));
  return cons(expression, result);
};

const game = () => {
  welcome(rule);
  gameProcess(3, generateTask);
};

export default game;
