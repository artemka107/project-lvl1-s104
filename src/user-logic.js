import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

let name;

const welcome = (rule) => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
};

// if given true - quits, if nothing - user wins
const endOfGame = (exit) => {
  if (!exit) {
    console.log(`Congratulations, ${name}!`);
  }
  process.exit();
};

const gameProcess = (generator) => {
  for (let counter = 3; counter > 0;) {
    const pair = generator();
    const result = cdr(pair);

    console.log(`Question: ${car(pair)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === 'exit') {
      endOfGame(true);
    }
    if (userAnswer === result) {
      console.log('Correct!');
      counter -= 1;
    } else {
      console.log(`${userAnswer} is wrong answer, correct answer was ${result}`);
      counter = 3;
    }
  }
  endOfGame();
};

export { welcome, gameProcess };
