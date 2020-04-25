/**

 ** Exercise 1: The odd ones out **

 Rewrite the following function using map and filter. 
 Avoid using for loop or forEach.
 The function should still behave the same.

 */
function doubleEvenNumbers(numbers) {
  const newNumbers = numbers
  .filter((items) => items %2 === 0)
  .map((items) => items * 2)

  return newNumbers;
}


const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console