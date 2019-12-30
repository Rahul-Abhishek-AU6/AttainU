//Largest elements
var arr = [1,3,5,6,8,9];
gt = 0;


    // array's element
    console.log("Your Array:")
    for(var i=0; i<arr.length; i++)
   {
     console.log(arr[i]);
       if(gt<arr[i])
       {
           gt = arr[i]
       }
   }

 console.log("Greatest in array:", gt)