import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal
let som=0
/*do{
    getal=parseFloat(await userInput.question('Geef een getal in: '));
    som+=getal;
}while(getal>0);*/


getal=parseFloat(await userInput.question('Geef een getal in: '));


while(getal>0){
    som+=getal;
    getal=parseFloat(await userInput.question('Geef een getal in: '));
}

console.log('De som is '+som);

process.exit();