//2nd Largest elements
var arr = [1,3,10,6,8,9];
gt = 0;
gt2 = 0;

    //largest array's element
    console.log("Your Array:")
    for(var i=0; i<arr.length; i++)
   {
     console.log(arr[i]);
       if(gt<arr[i])
       {
           gt = arr[i]
       }
   }

   //2nd largest element
   for(var i=0; i<arr.length; i++)
   {
     if (gt2<arr[i]){
       if (arr[i]!=gt){
         gt2=arr[i]
       }
     }
   }

 console.log("2nd Greatest in array:", gt2)