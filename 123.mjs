/*  let j=1
 while(j<=3){
        let a=j;
        let b=2*j;
        let c=3*j;
        let d=4*j;
        console.log(`${a} ${b} ${c} ${d}`);
       j++   
    }

  */
 
let i = 1
let j = 1;

while(i <= 3){
  let tePrintenLijn = ""
  j = 1
  while(j <= 4){
    let cel = i * j;
    tePrintenLijn += cel + " "
    j++
  }
  console.log(tePrintenLijn)
  i++
}

    
        




