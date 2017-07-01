import {welcome, gameProcess} from '../user-logic';
import { cons, car, cdr, toString } from 'hexlet-pairs';

const rule = 'Answer "yes" if number even otherwise answer "no"';

const generateTask = () => {
  let expression = Math.ceil(Math.random() * 100),
      result;

  if (expression % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }

  return cons(expression, result);
}

const game = () => {
  welcome(rule);
  gameProcess(generateTask);
};

export default game;
