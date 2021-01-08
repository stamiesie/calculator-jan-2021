import { getSum, getDiff, getProd, getQuot } from './mathUtils.js';

/////////////// Addition Button ///////////////
const additionField = document.getElementById('add-input-1');
const additionField2 = document.getElementById('add-input-2');
const addResults = document.getElementById('add-results');

export function myClickHandler() {
    const fieldValue = Number(additionField.value);
    const fieldValue2 = Number(additionField2.value);

    const result = getSum(fieldValue, fieldValue2);

    addResults.textContent = result;
}


/////////////// Subtraction Button ///////////////
const subtractionField = document.getElementById('subtract-input-1');
const subtractionField2 = document.getElementById('subtract-input-2');
const subtractResults = document.getElementById('subtract-results');

export function myClickHandlerTwo() {
    const subValue = subtractionField.valueAsNumber;
    const subValue2 = subtractionField2.valueAsNumber;

    const diff = getDiff(subValue, subValue2);

    subtractResults.textContent = diff;
}


/////////////// Multiplication Button ///////////////
const multField = document.getElementById('mult-input-1');
const multField2 = document.getElementById('mult-input-2');
const multResults = document.getElementById('mult-results');

export function myClickHandlerThree() {
    const multValue = multField.valueAsNumber;
    const multValue2 = multField2.valueAsNumber;

    const product = getProd(multValue, multValue2);

    multResults.textContent = product;
}


/////////////// Division Button ///////////////
const divField = document.getElementById('divide-input-1');
const divField2 = document.getElementById('divide-input-2');
const divResults = document.getElementById('divide-results');

export function myClickHandlerFour() {
    const quotientValue = divField.valueAsNumber;
    const quotientValue2 = divField2.valueAsNumber;

    const quotient = getQuot(quotientValue, quotientValue2);

    divResults.textContent = quotient;
}
