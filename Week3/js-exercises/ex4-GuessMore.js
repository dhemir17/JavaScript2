/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);


const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/*
At first section of the program X value does not change in the function
because it is declared by Const as global. So it will write screen as "9".

Second section Y object is declared by const also but it is an object. 
The X value of Y object will be changed in the function. so it will log as
{x: 10} to the screen.
*/