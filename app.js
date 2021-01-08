import { myClickHandler, myClickHandlerTwo, myClickHandlerThree, myClickHandlerFour } from './handlers.js';


////////// Addition Button //////////
const addButton = document.getElementById('add');

addButton.addEventListener('click', myClickHandler);


////////// Subtraction Button //////////
const subtractButton = document.getElementById('subtract');

subtractButton.addEventListener('click', myClickHandlerTwo);


////////// Multiplication Button //////////
const multButton = document.getElementById('mult');

multButton.addEventListener('click', myClickHandlerThree);


////////// Division Button //////////
const divButton = document.getElementById('divide');

divButton.addEventListener('click', myClickHandlerFour);