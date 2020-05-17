/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE

function removeDuplicates(arr){
  arr.forEach((item) => {
    if ( arr2.indexOf(item) !== arr2.lastIndexOf(item)) {
        arr2.splice(arr2.lastIndexOf(item),1);
    }  
  }); 
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);

if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
  console.log("Hooray!")
