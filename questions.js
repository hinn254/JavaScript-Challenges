// Challenge 1
// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".
//When you think you completed createFunction, un - comment out those lines in the code and run it to see if it works.

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
