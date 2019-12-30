function getEven(arr){
    var newarr = [];
  
    for (i=0; i<arr.length;i++){
      if (arr[i] % 2 === 0)
      {
        newarr.push(arr[i]);
      }
  
    }
  
  return newarr;
  }
  
  getEven([1,5,4,70,8,10,13,12])
  