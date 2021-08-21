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
  let favProgrammingLang = await ask('What is your favorite programming language? ');
  
  if(favProgrammingLang.toLowerCase() in ["js","javascript"]){
    console.log(`Hi ${name}, ${favProgrammingLang} is your favorite programming language,  you rock!`);
  }else{
    console.log(`Hi ${name}, ${favProgrammingLang} is your favorite programming language,  great choice!`);
  }
  
  process.exit();
}
