/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */
function checkTime(i) { //If the digit is less than 10 it adds "0" to the beginning
  if(i<10)
    t = "0" + i;
  return i;
}
function displayCurrentTime() {
  // your code goes in here
  const today = new Date();
  const h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);  //minute check time
  s = checkTime(s);  //second check time
  document.querySelector('#time').innerHTML = h + ":" + m + ":" + s ;
}
setInterval(displayCurrentTime, 1000);