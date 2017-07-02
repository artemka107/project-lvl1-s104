import { cons } from 'hexlet-pairs';
import { welcome, gameProcess } from '..';

const rule = 'Balance the given number.';

const tranlsateToArr = (num) => {
  const number = String(num);
  const arr = [];
  for (let i = 0; i < number.length; i += 1) {
    arr[i] = Number(number[i]);
  }
  return arr;
};

const translateToNumber = (arr) => {
  let number = '';
  for (let i = 0; i < arr.length; i += 1) {
    number += arr[i];
  }
  return number;
};

const balance = (data) => {
  const array = data;
  array[0] += 1;
  array[data.length - 1] -= 1;
  return array;
};

const sortArr = (arr) => {
  const array = arr.sort();
  if (array[array.length - 1] - array[0] > 1) {
    return sortArr(balance(array));
  }
  return arr;
};

const generateTask = () => {
  const expression = Math.round(Math.random() * 10000);
  const result = translateToNumber(sortArr(tranlsateToArr(expression)));
  return cons(expression, result);
};

const game = () => {
  welcome(rule);
  gameProcess(generateTask);
};

export default game;
