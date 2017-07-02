import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

let name;

const welcome = (rule) => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
};

const gameProcess = (exprssionGenerator) => {
  const attempt = 3;
  let counter = attempt;
  while (counter > 0) {
    const pair = exprssionGenerator();
    const result = cdr(pair);

    console.log(`Question: ${car(pair)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === 'exit') {
      // endOfGame(true);
      return console.log('See you on the next time');
    }
    if (userAnswer === result) {
      console.log('Correct!');
      counter -= 1;
    } else {
      console.log(`${userAnswer} is wrong answer, correct answer was ${result}`);
      counter = attempt;
    }
  }

  return console.log(`Congratulations, ${name}!`);
};

export { welcome, gameProcess };
