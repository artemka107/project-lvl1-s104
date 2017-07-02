import { cons } from 'hexlet-pairs';
import { welcome, gameProcess } from '..';

const rule = 'Answer "yes" if number even otherwise answer "no"';

const generateTask = () => {
  const expression = Math.ceil(Math.random() * 100);
  let result;

  if (expression % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }

  return cons(expression, result);
};

const game = () => {
  welcome(rule);
  gameProcess(generateTask);
};

export default game;
