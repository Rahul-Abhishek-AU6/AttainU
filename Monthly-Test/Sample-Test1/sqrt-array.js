//Square Root of all elements from array...
function sqrtOfArray(arr){
    var newarr = [];
  
    for (i=0; i<arr.length;i++){
     
        newarr.push(Math.sqrt(arr[i]));
  
    }
  
  return newarr;
  }
  
  sqrtOfArray([9,1,8,32,54])
  