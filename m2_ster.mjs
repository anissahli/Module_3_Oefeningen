import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let hoogte=parseFloat(await userInput.question('Geef een hoogte in: '));
let i=1
let result=""

while(i<=hoogte){
    result+="*"
    console.log(result)
    i++
}

/*for(let i=1;i<=hoogte;i++){
    result+="*"
    console.log(result)
}*/

process.exit();