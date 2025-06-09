/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickname = document.getElementById('nickname');
const favFood = document.getElementById('fav-food');
const hometown = document.getElementById('hometown');
const listItem = document.querySelectorAll('li');

nickname.innerText = 'Anastasiia';
favFood.innerText = 'Pizza';
hometown.innerText = 'Gorssel';
listItem.forEach((item) => {
  item.classList.add('list-item');
});
