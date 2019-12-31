//Hypotenuse of right angle triangle.
var o = 0;
function getHypo(h, b) {
  function square(n){
    return n * n;
  }
  o = (Math.sqrt(square(h) + square(b)));
  return o;
}

h = prompt("Enter Heigth of Triangle: ",);
b = prompt("Enter Breath of Triangle: ",); 
console.log("Hypotenuse of Trianle is: ", getHypo(h, b));