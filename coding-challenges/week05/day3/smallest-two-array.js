function smallestOf(arr1,arr2){
    var min = arr1[0];
    
    for (i=0; i<arr1.length;i++){
      if(min>arr1[i]){
        min=arr1[i];
      }
    }
  
  
    for (i=0; i<arr2.length;i++){
      if(min>arr2[i]){
        min=arr2[i];
      }
    }
  
  
  return min;
  }
  
  var array1 = [0,2,3,5,7];
  var array2 = [2,3,10,7,1];
  console.log("Your First Array: ",array1);
  console.log("Your Second Array: ",array2);
  console.log("Smallest Among All Above:", smallestOf(array1, array2))
  
  