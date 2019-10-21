/*
To the instructor, I use: 
    codeshare.io ==> 
    I have a login so I login
    share in daily or session
*/

/*
    let's play a little game here.... 
    stand if you think this test will execute successfully
*/

test('hello world console.log1', () => {
    console.log("Hello World 1");
});

/*
    run it for your self
    create a file in /src/javascript/tdd-01.test.js
    you will be checking this in
*/

/*
    Run the test on your computer... did it work?
    when your done and know the answer come to the white board
*/

/*
    create a second test as follow and run it.
*/

test('hello world console.log2', () => {
    console.log("Hello World 2");
});

/*
    How do we only run the tests in a single directory? Do it.
    npm test src/javascript
*/

/*
    How do we only run the tests in a single file? Do it.
    npm test src/javascript/tdd-01.test.js
*/

/*
    How do we run a single test or patter
    npm test tdd -- -t 'log2'
*/

// ---------------------------------------

/*
    Will this test execute correctly?
*/
test('check a string to see if it is the same', () => {
    expect('abcd').toEqual('abcd');
});

/*
    Change the above test to fail, then run it.
*/

/*
    Will this test execute correctly?
*/
test('check an array see if it is the same', () => {
    expect([1, 2, 3, 4]).toEqual([1, 2, 3, 4]);
});

/*
    Change the above test to fail, then run it.
*/

// ---------------------------------

/*
    What's the point of all of this...
    - you can test as fine grain as you need
    - the testing framemwork is very simple
*/

/*
    If you submitted a coverage report that had everything
    at 100% you do not have to listen to the rest of this.
*/

/*
    create another file 
    create a file in /src/javascript/tdd-01.js
    add the import and export statements

import functions from "./tdd-01.js";

export default functions;

*/

/*
    Our goal is to:
    Write a function called emailBuilder to create an email from a 
    first and last name.
    The email will be: first initial + last name
    larry shumlich should create an email l.shumlich@evolveu.ca
*/

/*
    Write the stub 
    Share with your neighbors
    There is a correct and wrong answer here
*/

const functions = {
    emailBuilder: (fname, lname) => {
        return ''
    },
}

/*
    Write the first test 
    share with your neighbors
*/

test('emailBuilder test', () => {
    expect(functions.emailBuilder('larry', 'shumlich')).toEqual('l.shumlich@evolveu.ca');
});
/*
    Make sure the test fails.
*/

/*
    Now write the code you need to make the test pass.
*/


/*
    If this is not the answer it's wrong...
*/

functions.emailBuilder = (fname, lname) => { 
    return 'l.shumlich@evolveu.ca';
};

/*
    Profound... Important Point... Astric this.
    If you did anything else here you are wrong.
    This is one of the main reasons tests do not get 100% coverage.
    Understanding this concept puts you ahead of 90% of most 
    developers that claim to do TDD.

    If you put anything else here you are not testing it. Only write 
    the code required to satisfy the test you have written. You must
    write another test.

    This is so freaking important we are stopping here.
*/



/* --------------------------------------

/*
    Our goal is to write a function called insertIntoArray that will 
    insert an item into an array. The array is mutable. 
    -  write the stub
*/

/*
    Share the stub with your neighbors
*/

// functions.insertIntoArray1 =
//     (arr, index, item) => { return [] };


/*
    Write a test that will make the test fail
*/

// test('insertIntoArray test', () => {
//     expect(functions.insertIntoArray1([1, 2, 3, 4], 2, 5)).toEqual([1, 2, 3, 5, 4]);
// });

// functions.insertIntoArray2 = (arr, index, item) => { return [1, 2, 3, 5, 4] }

// test('insertIntoArray2 test', () => {
//     expect(functions.insertIntoArray2([1, 2, 3, 4], 2, 5)).toEqual([1, 2, 3, 5, 4]);
// });
