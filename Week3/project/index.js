// Your code goes in here

//document.querySelector("#app").innerText = "Tip Calculator";
const billMoney = document.getElementById('bill-money');
const tipSelect = document.getElementById('tip-select');
const billSharing = document.getElementById('bill-sharing');
const calcButton = document.getElementById('calculate-btn');
const resultArea = document.getElementById('result');

//document.getElementById('result-part').style.display = "none";




calcButton.addEventListener('click',function (){
   // document.getElementById('result-part').style.display = "initial";
   if (billSharing.value === "" || billMoney.value === "")  {
       window.alert('You need to fill in all the fields!');
   }
   if (billSharing.value === "1") {
        document.getElementById('each').innerText = "";   }
   
   let perc = 0;
    
    switch ( tipSelect.value) {
        case "30":
            perc = 30;
            break;
        case "20":
            perc = 20;
            break;
        case "15":
            perc = 15;
            break;
        case "10":
            perc = 10;
            break;
        case "5":
            perc = 5;
    }

    let result = Number(billMoney.value) * perc / 100 / Number(billSharing.value);

    resultArea.innerText = "$" + result.toFixed(2);
});



