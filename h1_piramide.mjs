import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte=parseFloat(await userInput.question('Geef een hoogte in: '));

for(let i = 1; i <= (hoogte+1)/2; i++)
{
    let uitvoer = '';
    for(let j = 1;j<(hoogte+1)/2-(i-1);j++)
    {
            uitvoer+=" ";
    }

    for(let j = 1;j<2*i;j++)
    {
            uitvoer+="*";
    }
console.log(uitvoer);
}

    
    
    
    
   

process.exit();

