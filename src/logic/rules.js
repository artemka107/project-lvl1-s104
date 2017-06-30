import readlineSync from 'readline-sync';

const welcome = (rule) => {
  console.log(`
    Welcome to the Brain Games!
    ${rule}
    Press "exit" to end game.
  `);
};

const checkRule = (expression, answer) => {
  if (expression === answer) {
    return true;
  }
  return false;
};

const checkAnswer = (answer, expression, correctAnswer) => {
  if (checkRule(expression, answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  return false;
};

const processGame = (attempt, expression) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  for (let i = attempt; i > 0;) {
    console.log(`question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === expression) {
      console.log('Correct!');
      i -= 1;
    }
  }
};

export { welcome, checkRule, checkAnswer, processGame };
