import { cons, car, cdr } from 'hexlet-pairs';
import { welcome, gameProcess } from '../user-logic';

const rule = 'Find the greatest common divisor of given numbers';

const generateTask = () => {
  const numbers = cons(Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100));
  let a = car(numbers);
  let b = cdr(numbers);

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return cons(`${car(numbers)} ${cdr(numbers)}`, String(a + b));
};

const game = () => {
  welcome(rule);
  gameProcess(3, generateTask);
};

export default game;
