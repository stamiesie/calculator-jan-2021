// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const welcomeElement = document.getElementById('welcome');

console.log(welcomeElement);

const myButton = document.getElementById('change');
const input = document.getElementById("input");
inputElement = document.getElementById("user-input");

myButton.addEventListener('click', () => {
    welcomeElement.style.color = "red";
    welcomeElement.textContent = input.value;
});

console.log("It Worked!!!!");


const paragraph = document.getElementById("words");

button2.addEventListener('click', () => {
    paragraph.style.color = "red";
});

const background = document.getElementById("page");

console.log("Change the background!");

button3.addEventListener('click', () => {
    page.style.background = "black";
});

