//Power to Another.
function getPower(n, p) {
    i = 1;
    r = n;
    while(i < p){
      r = r * n;
      i++;
    }
  return r;
  } 
  
  n = prompt("Enter the Number: ",);
  p = prompt("Enter power to the number: ",); 
  console.log("Result is: ", getPower(n, p));