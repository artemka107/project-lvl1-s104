import readlineSync from 'readline-sync';

const playGame = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\nPress "exit" to end game\n');

  const name = readlineSync.question('May I have your name? ');

  const checkParity = (number, answer) => {
    if (number % 2 === 0 && answer === 'yes') {
      return true;
    } else if (number % 2 !== 0 && answer === 'no') {
      return true;
    }
    return false;
  };

  const revertAnswer = (answer) => {
    if (answer === 'yes') {
      return 'no';
    }
    return 'yes';
  };

  const processGame = (attempt) => {
    if (attempt > 0) {
      const randomNumber = Math.floor(Math.random() * 100);
      console.log(`Question: ${randomNumber}`);
      const answer = readlineSync.question('Your answer: ');

      if (answer === 'exit') {
        return console.log('See you next time!');
      } else if (checkParity(randomNumber, answer)) {
        console.log('Correct!');
        return processGame(attempt - 1);
      }
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${revertAnswer(answer)}"`);
      return processGame(3);
    }

    return console.log(`Congratulations, ${name}`);
  };

  return processGame(3);
};

export default playGame;
