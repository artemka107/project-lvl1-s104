import readlineSync from 'readline-sync';
import { welcome, checkRule, revertAnswer, processGame, checkAnswer } from '../logic/rules';

const playGame = () => {
  welcome('Answer to the questions');

  const expressionGenerator = (num1, num2) => {
    let expression = null;
    switch (Math.ceil(Math.random() * 3)) {
      case 1:
        expression = `${num1} + ${num2}`;
        break;
      case 2:
        expression = `${num1} - ${num2}`;
        break;
      case 3:
        expression = `${num1} * ${num2}`;
        break;
      default:
        break;
    }
    return expression;
  };

  const operand1 = Math.ceil(Math.random() * 100);
  const operand2 = Math.ceil(Math.random() * 100);


};
