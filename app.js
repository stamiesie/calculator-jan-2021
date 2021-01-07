const additionField = document.getElementById('add-input-1');

const additionField2 = document.getElementById('add-input-2');

const addButton = document.getElementById('add');

const addResults = document.getElementById('add-results');

console.log(additionField);
console.log(additionField2);
console.log(addResults);
console.log(addButton);

addButton.addEventListener('click', () => {
    const fieldValue = Number(additionField.value);
    const fieldValue2 = Number(additionField2.value);

    const result = fieldValue + fieldValue2;

    addResults.textContent = result;

});

const subtractionField = document.getElementById('subtract-input-1');

const subtractionField2 = document.getElementById('subtract-input-2');

const subtractButton = document.getElementById('subtract');

const subtractResults = document.getElementById('subtract-results');

subtractButton.addEventListener('click', () => {
    const subValue = subtractionField.valueAsNumber;
    const subValue2 = subtractionField2.valueAsNumber;

    const diff = subValue - subValue2;

    subtractResults.textContent = diff;
});

const multField = document.getElementById('mult-input-1');

const multField2 = document.getElementById('mult-input-2');

const multButton = document.getElementById('mult');

const multResults = document.getElementById('mult-results');

multButton.addEventListener('click', () => {
    const multValue = multField.valueAsNumber;
    const multValue2 = multField2.valueAsNumber;

    const product = multValue * multValue2;

    multResults.textContent = product;
});


const divField = document.getElementById('divide-input-1');

const divField2 = document.getElementById('divide-input-2');

const divButton = document.getElementById('divide');

const divResults = document.getElementById('divide-results');

divButton.addEventListener('click', () => {
    const quot = divField.valueAsNumber / divField2.valueAsNumber;

    divResults.textContent = quot;
});


