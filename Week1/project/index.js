// your code goes in here

const quoteL = document.querySelector('#lab');
const authorL = document.querySelector('#lab2');

const button1 = document.querySelector('#quote');

const myQuotes = [
    {quote : "Be yourself; everyone else is already taken.", author : "Oscar Wilde"},
    {quote : "So many books, so little time.", author : "Frank Zappa"},
    {quote : "A room without books is like a body without a soul.", author : "Marcus Tullius Cicero"},
    {quote : "You only live once, but if you do it right, once is enough.", author : "Mae West"},
    {quote : "Be the change that you wish to see in the world.", author : "Mahatma Gandhi"},
    {quote : "No one can make you feel inferior without your consent.", author : "Eleanor Roosevelt"}];
function randomNum(){
    let a = Math.floor(Math.random() * 6);
    return a;
}
button1.addEventListener('click',function(){
    let a = randomNum();
    quoteL.innerText = myQuotes[a].quote;
    authorL.innerText = "-  " + myQuotes[a].author;
})