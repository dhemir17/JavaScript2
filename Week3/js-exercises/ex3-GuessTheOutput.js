/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/* 
X is declared as const but our a variable is declared by "let" and change 
the value as 12 in the function. When we call x , our variable a (valued as 12)
alerted by the window.
*/