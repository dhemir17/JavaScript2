// Your code goes in here
const billMoney = document.getElementById('bill-money');
const tipSelect = document.getElementById('tip-select');
const billSharing = document.getElementById('bill-sharing');
const calcButton = document.getElementById('calculate-btn');
const resultArea = document.getElementById('result');

calcButton.addEventListener('click',function (){
   if (billSharing.value === "" || billMoney.value === "")  {
       window.alert('You need to fill in all the fields!');
   }
   if (billSharing.value === "1") {
        document.getElementById('each').innerText = "";   }
   else {
      document.getElementById('each').innerText = "each";
      //Switch is removed with your help :)
    let result = Number(billMoney.value) * tipSelect.value / 100 / Number(billSharing.value);
    console.log(document.getElementById('tip-select').valueAsNumber);

    resultArea.innerText = "$" + result.toFixed(2);
});
