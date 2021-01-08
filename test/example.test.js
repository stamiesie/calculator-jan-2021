

// IMPORT MODULES under test here:

// import { example } from '../example.js';

import { getAdd, getSub, getMult, getDiv } from '../mathUtils.js';




/////////////// Addition Tests ///////////////

const test = QUnit.test;

test('will return 5 when given 2 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getAdd(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('will return 20 when given 12 and 8', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 20;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getAdd(12, 8);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


/////////////// Subtraction Tests ///////////////
test('will return 3 when given 7 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 3;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSub(7, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('will return 13 when given 20 and 7', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 13;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSub(20, 7);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


/////////////// Multiplication Tests ///////////////

test('will return 12 when given 3 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMult(3, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('will return 20 when given 5 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 20;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMult(5, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

/////////////// Division Tests ///////////////

test('will return 2 when given 4 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDiv(4, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('will return 5 when given 100 and 20', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDiv(100, 20);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});