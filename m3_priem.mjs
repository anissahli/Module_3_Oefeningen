import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { resourceLimits } from 'node:worker_threads';
const userInput = readline.createInterface({input, output});

let getal=parseFloat(await userInput.question('Geef een getal in: '));
let rest=""

if(getal==1||getal==2){
    console.log('Priemgetal')
}else{
for(let deler=2;deler<getal&&rest!==0; deler ++){
    rest=getal%deler;
    deler ++;
}

if(rest==0){
    console.log('Geen priemgetal');
}else{
    console.log('Priemgetal');
}
}

process.exit();





    









