'use script';
let input = document.querySelector('.form-input');
let addBtn = document.querySelector('.form-button');
let tasks = document.querySelector('.form-task');
let btnClear = document.querySelector('.btn-clear');
let taskDate = document.querySelector('.form-date');
let scrollContainer = document.querySelector('.scroll-container');
const ani = document.querySelector('.ani');

/*const now = new Date();
const day = `${now.getDay()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();*/

let timeStamp = Date.now();
let date = new Date(timeStamp);
let day = date.toString().substring(0, 3);
let month = date.toString().substring(4, 7);
let dayOfMonth = date.toString().substring(8, 10).padStart(2, 0);


// add new item to list
let newItem;
addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (input.value.trim() != 0) {
    newItem = document.createElement('div');
    newItem.classList.add('task-class');
    newItem.innerHTML = `
    <p> ${input.value} </p>
    <div class="form-date">${day} ${dayOfMonth} ${month}</div>
    `;

    
    scrollContainer.appendChild(newItem);
    input.value = '';
  } else {
    alert('please enter a task');
  }
});

btnClear.onclick = () => {
  scrollContainer.innerHTML = '';
  //newItem.classList.add('hidden');
  console.log('me');
}
