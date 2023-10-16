import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal=parseFloat(await userInput.question('Geef een getal in: '));
console.log('De tafel van '+getal+':');
let i=1
while(i<=10){
    let result=getal*i;
    console.log(`${getal} x ${i} = ${result}`);
    i++
}

process.exit();
