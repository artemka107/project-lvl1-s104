import { cons } from 'hexlet-pairs';
import { welcome, gameProcess } from '..';

const rule = 'Balance the given number.';

const getArr = (num) => {
  const number = String(num);
  const arr = [];
  for (let i = 0; i < number.length; i += 1) {
    arr[i] = Number(number[i]);
  }
  return arr;
};

const getNumber = (arr) => {
  let number = '';
  for (let i = 0; i < arr.length; i += 1) {
    number += arr[i];
  }
  return number;
};

const sortArr = arr => arr.sort();

const balance = (data) => {
  const array = data;
  array[0] += 1;
  array[array.length - 1] -= 1;
  return array;
};

const checkOrder = (arr) => {
  const array = sortArr(arr);
  if (array[array.length - 1] - array[0] > 1) {
    return checkOrder(balance(array));
  }
  return getNumber(arr);
};

const generateTask = () => {
  const expression = Math.round(Math.random() * 10000);
  const result = checkOrder(getArr(expression));
  return cons(expression, result);
};

const game = () => {
  welcome(rule);
  gameProcess(3, generateTask);
};

export default game;
