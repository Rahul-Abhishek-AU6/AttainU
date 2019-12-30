//sum of array elements
var arr = [1,3,5,6,8,9];
sum = 0;

    // array's element
    console.log("Your Array:")
    for(var i=0; i<arr.length; i++)
   {
     console.log(arr[i]);
       sum = (sum + arr[i]);
   }

 console.log("sum of all elements in array:", sum)