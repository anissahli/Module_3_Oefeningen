/*Maak een applicatie dat alle getallen tussen 1 en 100 afprint. 
Maar voor getallen deelbaar door 3 print je "Fizz" af, voor getallen deelbaar door 5 print je "Buzz" af 
en voor getallen deelbaar door 3 en 5 print je "FizzBuzz" af.*/


for(let getal=1; getal<=100; getal++){
    if(getal%15==0){
        console.log('FizzBuzz');
    }else if(getal%3==0){
        console.log('Fizz');
    }else if(getal%5==0){
        console.log('Buzz');
    }else{
        console.log(getal);
    }
}
