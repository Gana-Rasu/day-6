// Declare variables to store your first name, last name, marital status, country and age in a single line
var first_name = "gana"
var last_name = "nathan"
var marital_status = "single"
var country = "india"
var age = 23
console.log(`${first_name} ${last_name}`)

//square of a number
var n 

function square(n){
    return n*n
}
console.log(square(3))

// Swapping 2 numbers
let a= 3;
let b=2;
let c=0;
c=a;//c=3
a=b;//a=2
b=c;//b=3
console.log(a,b)

//Write a loop that makes seven calls to console.log to output the following triangle:
var temp = "#"
for(var i=0;i<7;i++){
    temp = temp + temp[i]
    console.log(temp)
}

//Write a code to replace the array value — If the number is even, replace it with ‘even’.
//Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = odd
//  }
// }
// console.log(numsArr);


//fixed code
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 === 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);


//Write a code to add all the numbers in the array
// Output: 66
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  var sum;
//  sum += numsArr[i]
// }
// console.log(sum);
//fixed code
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 var sum=0;
for (var i = 0; i <numsArr.length; i++) {

 sum += numsArr[i]
}
console.log(sum);


//sum even and sun odd
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2!=0);
//  {
//  sum += numsArr[i]
//  }
//  else
//  {
//  sum -= numsArr[i]
//  }
// }
// console.log(sum);
//fixed code
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <numsArr.length; i++) {
 if(numsArr[i]%2===0)
 {
 sum =sum+ numsArr[i]
 }
 else if(numsArr[i]%2!==0)
 {
 sum -= numsArr[i]
 }

} console.log(sum)


// Fix the code to Sum of all numbers using IIFE function
// const arr = [9,8,5,6,4,3,2,1];
// (function() {
//  let sum = 0;
//  for (var i = 0; i <= arr.length; i++);{
//  sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();

//correct code
(function res(arr){
    var sum = 0
  for(var i =0;i<arr.length;i++){
      sum = sum + arr[i]
  }  
 console.log(sum)
})
([9,8,5,6,4,3,2,1])