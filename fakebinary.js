function fakeBin(x){
  var numList = [];
   for (i = 0; i < x.length; i++){
     let num = parseInt(x)
     if (x[i] < 5) {
       num = 0
     } else {
       num = 1
       }
     let numString = num.toString()
     numList.push(numString)  
     }
     var answer = numList.join("")
     return answer 
 } 



//  other answers
function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


// breakdown


function fakeBin(x){
  // establish an empty array
  var numList = [];
  // loop through the list of numbers, aka x
   for (i = 0; i < x.length; i++){
    //  x is inititally a string, change the value into an integer
     let num = parseInt(x)
    //  check each index value, if less than 5 aka 4 and below, assign 0
     if (x[i] < 5) {
       num = 0
      //  otherwise assign 1
     } else {
       num = 1
       }
      //  convert the number back into a string
     let numString = num.toString()
    //  add the string into the array we established
     numList.push(numString)  
     }
    //  numlist here is seperated by commas in the array, combine all the numbers into a single string without spaces here
     var answer = numList.join("")
    //  show me the money
     return answer 
 } 

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.