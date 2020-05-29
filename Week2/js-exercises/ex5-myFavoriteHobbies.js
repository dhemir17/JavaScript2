/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

function createHTMLList(arr) {
  // your code goes in here
  const ul = document.getElementById('list');
  arr.forEach(element => {     //no new array needed so I changed map methot as forEach.
    let listItem = document.createElement('li');
    listItem.innerText = element;
    ul.appendChild(listItem);
  });
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
createHTMLList(myHobbies);
