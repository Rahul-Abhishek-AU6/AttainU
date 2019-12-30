//Compare 2 array
var arr1 = [1,3,5,6,8,9];
var arr2 = [1,3,5,6,8,7];
var n = 0;

if (arr1.length!=arr2.length)
{
n = 1;
console.log("Array Length Is Not Equal");
}
else
{
    //comparing array's element
    for(var i=0;i<arr1.length;i++)
    if(arr1[i]!=arr2[i]){
        n = 1;
    console.log("Number", arr2[i], " is not match in same place of first array");
    }

    
}
if(n != 1){
console.log("Both Array are equal");
}