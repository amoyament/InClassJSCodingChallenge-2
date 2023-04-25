// Create a function that filters out negative numbers
// In this challenge, you’ll have a function that takes an array as input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”


const array = [1, 2, 3, 4, -1, 5, -2, -3];
//Create funtion to identify the negative numbers
function isNeg(num) {
  if (num > -1){//make it greater than -1, not 0, because we want to inclue zero since it is not a negative number
  return true;  
}; //If the number is less than zero (negative), the function will return it
}
console.log(array.filter(isNeg));//Then, we will filter out all of the 'true' negative numbers with the .filter method
