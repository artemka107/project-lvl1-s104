import { cons } from 'hexlet-pairs';
import { welcome, gameProcess } from '..';

const rule = 'What is the result of the expression?';

const exprssionGenerator = (num1, num2) => {
  let expression;
  let result;
  switch (Math.ceil(Math.random() * 3)) {
    case 1:
      expression = `${num1} + ${num2}`;
      result = num1 + num2;
      break;
    case 2:
      expression = `${num1} - ${num2}`;
      result = num1 - num2;
      break;
    case 3:
      expression = `${num1} * ${num2}`;
      result = num1 * num2;
      break;
    default:
      break;
  }
  return cons(expression, String(result));
};

const generateTask = () => {
  const operand1 = Math.ceil(Math.random() * 100);
  const operand2 = Math.ceil(Math.random() * 100);

  return exprssionGenerator(operand1, operand2);
};

const game = () => {
  welcome(rule);
  gameProcess(generateTask);
};

export default game;
