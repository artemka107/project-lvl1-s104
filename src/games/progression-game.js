import { cons } from 'hexlet-pairs';
import { welcome, gameProcess } from '..';

const rule = 'What number is missing in this progression?';

const generateProgression = (progressionStep) => {
  let expression = '';
  let result;
  let count = Math.round(Math.random() * 10);
  for (let i = 0; i < 10; i += 1) {
    if (i === 5) {
      count += progressionStep;
      expression += '.. ';
      result = String(count);
    } else {
      count += progressionStep;
      expression += `${count} `;
    }
  }

  return cons(expression, result);
};

const generateTask = () => generateProgression(Math.round(Math.random() * 10));

const game = () => {
  welcome(rule);
  gameProcess(3, generateTask);
};

export default game;
