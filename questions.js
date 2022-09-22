/**
 * Challenge 1
 * Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".
 * When you think you completed createFunction, un - comment out those lines in the code and run it to see if it works.
 * @returns {String}
 */

// CHALLENGE 1
function createFunction() {
  return () => {
    console.log('hello');
    return 'hello';
  };
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

//----------------------------CHALLENGE 2---------------------------------------------- //

/**
 * Challenge 2
 * Create a function createFunctionPrinter that accepts one input and returns a function.
 * When that created function is called, it should print out the input that was used when the function was created.
 * @returns {String}
 */

// CHALLENGE 2
function createFunctionPrinter(input) {
  return function () {
    console.log(input);
    return input;
  };
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
//printHello(); // => should console.log('hello');

//------------------------------------------------------------------------------------ //

//----------------------------CHALLENGE 3---------------------------------------------- //

/**
 * Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
 * Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.
 */

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

// const willCounter = outer();
// const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter(); // 1
// willCounter(); // 2
// willCounter(); // 3

// jasCounter(); // 1
// willCounter(); // 4

function addByX(x) {
  return (y) => {
    console.log(x + y);
    return x + y;
  };
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

//------------------------------------------------------------------------------------ //

//----------------------------CHALLENGE 4---------------------------------------------- //

/**
 * Write a function once that accepts a callback as input and returns a function.
 * When the returned function is called the first time, it should call the callback and return that output.
 * If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
 */

function once(callback) {
  let counter = 0;
  let value;

  const executeCallback = (y) => {
    if (counter < 1) {
      counter++;
      return (value = callback(y));
    } else {
      return value;
    }
  };

  return executeCallback;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4)); // => should log 6
// console.log(onceFunc(10)); // => should log 6
// console.log(onceFunc(9001)); // => should log 6

//------------------------------------------------------------------------------------ //

//----------------------------CHALLENGE 5---------------------------------------------- //

/**
 * Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
 */

function after(count, func) {
  let called_count = 1;

  return function () {
    called_count++;
    if (count === called_count) {
      return func();
    }
  };
}

// /*** Uncomment these to check your work! ***/
// const called = function () {
//   console.log('hello');
// };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

//------------------------------------------------------------------------------------ //

//----------------------------CHALLENGE 6---------------------------------------------- //

/**
 * Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter.
 * Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
 */

function delay(callback, wait) {
  let timeout;

  if (timeout) {
    console.log('THE TIMEOUT');
    return;
  }

  return function () {
    timeout = setTimeout(() => {
      timeout = null;
      return callback();
    }, wait);
  };
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log('hello');
};
// const delayCalled = delay(called, 3000);
// delayCalled();
// delayCalled();
// delayCalled();

//------------------------------------------------------------------------------------ //

//----------------------------CHALLENGE 7---------------------------------------------- //

/**
 * Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console.
 * The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.
 */

function rollCall(names) {
  let counter = -1;
  let namesLength = names.length;

  return function () {
    counter++;
    if (counter < namesLength) {
      console.log(names[counter]);
      return names[counter];
    } else {
      console.log('Everyone accounted for');
    }
  };
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth']);
rollCaller(); // => should log 'Victoria'
rollCaller(); // => should log 'Juan'
rollCaller(); // => should log 'Ruth'
rollCaller(); // => should log 'Everyone accounted for'
//------------------------------------------------------------------------------------ //
