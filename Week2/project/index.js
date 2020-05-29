/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
  **/
 const upButton = document.querySelector('#up-button');
 const downButton = document.querySelector('#down-button');
 const playButton = document.querySelector('#play-button');
 const pauseButton = document.querySelector('#pause-button');
 const sessionLength = document.querySelector('#session-length');
 const timeArea = document.querySelector('#time-area');
 
 let isClockRunning = false;
 let workSessionDuration = parseInt(sessionLength.textContent) * 60;
 let currentTimeLeftInSession = workSessionDuration;
 
 playButton.addEventListener('click', () => {
    toggleClock();
    upButton.classList.add('disabled');
 })
 pauseButton.addEventListener('click', () => {
   toggleClock();
   isClockRunning = false;
   clearInterval(clockTimer);
   upButton.classList.remove('disabled');
 })
 
 function toggleClock(reset){
   if (!reset) {
     if (isClockRunning === true) {
       isClockRunning = false;
     } else {
       isClockRunning = true;
       clockTimer = setInterval(() => {
           currentTimeLeftInSession--;
           displayCurrentTimeLeftInSession();
       }, 1000)
     }
   }
 }
 
 function displayCurrentTimeLeftInSession(){
   const secondsLeft = currentTimeLeftInSession;
   let result = '';
   const seconds = secondsLeft % 60;
   const minutes = parseInt(secondsLeft / 60) % 60;
   
   result += `${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}` //padStart() method applied instead of functions
   timeArea.innerText = result; //toString fixed.
   if (minutes == 0 && seconds == 0) {
     clearInterval(clockTimer);
     timeArea.innerText = "Time is up!";
   }
 }
 
 function upDownFunc() { 
   timeArea.innerText = `${sessionLength.textContent} : 00`;
   currentTimeLeftInSession = parseInt(sessionLength.textContent) * 60;
 }
 upButton.addEventListener('click', () => {
   if (!upButton.classList.contains('disabled')) {
     sessionLength.textContent++;
     upDownFunc();
   }
 });
 downButton.addEventListener('click', () => {
   if (!upButton.classList.contains('disabled')) {
     sessionLength.textContent--;
     upDownFunc();
   }
 });
 
 timeArea.innerText = result;
 