const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  let name = await ask('What is your name? ');
  let color = await ask('What is your favorite color? ');
  
  console.log(`Hi ${name}, ${color} is your favorite color!`);
  process.exit();
}
