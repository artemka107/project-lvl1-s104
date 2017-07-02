import { cons } from 'hexlet-pairs';
import { welcome, gameProcess } from '..';

const rule = 'What number is missing in this progression?';

const generateProgression = (progressionStep) => {
  let progressionList = '';
  let randomNumberOfList;
  let currentNumber = Math.round(Math.random() * 10);
  const numberPosition = Math.round(Math.random() * 10);
  for (let i = 0; i < 10; i += 1) {
    if (numberPosition === i) {
      progressionList += '.. ';
      randomNumberOfList = String(currentNumber);
    } else {
      progressionList += `${currentNumber} `;
    }
    currentNumber += progressionStep;
  }
  return cons(progressionList, randomNumberOfList);
};

const generateTask = () => generateProgression(Math.round(Math.random() * 10));

const game = () => {
  welcome(rule);
  gameProcess(generateTask);
};

export default game;
