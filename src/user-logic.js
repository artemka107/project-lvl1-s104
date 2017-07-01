import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';

let name;

const welcome = (rule) => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
}

const gameProcess = (generator) => {

  for (let counter = 3; counter > 0;) {
    let pair = generator(),
        userAnswer,
        result = cdr(pair);
        
    console.log(`Question: ${car(pair)}`);
    userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer === 'exit') {
      endOfGame(true);
    }
    if (userAnswer === result) {
      console.log('Correct!')
      counter--;
    } else {
      console.log(`${userAnswer} is wrong answer, correct answer was ${result}`);
      counter = 3;
    }
  }
  endOfGame();
}

// if given true - quits, if nothing - user wins
const endOfGame = (exit) => {
  if (!exit) {
    console.log(`Congratulations, ${name}!`);
  }
  process.exit();
}


export {welcome, gameProcess};
