/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

document.body.style.fontFamily = "Arial, sans-serif";

const sNickName = document.querySelector('#nickname');
const sFavFood = document.querySelector('#fav-food');
const sHome = document.querySelector('#hometown');
sNickName.innerText = "dhemir";
sFavFood.innerText = "Chicken with Kori Souce";
sHome.innerText = "Izmir-Turkey";

const ul = document.querySelector('ul');
const ilArray = Array.from(ul.children);
ilArray.forEach(li => {
    li.classList.add("list-item");
})



const img = document.createElement('img');
img.src = "https://ca.slack-edge.com/T0EJTUQ87-UTWJHP9DW-2ee9500118ed-512";
document.body.appendChild(img);