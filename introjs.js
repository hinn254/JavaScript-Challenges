/* ========== *
 * Challenge 1 *
 * =========== */

//Uncomment the lines below to test your code
console.log(typeof 7.0 === "number");
console.log(typeof 22 === "number");
console.log(typeof true === "boolean");

var myVar;
console.log(typeof myVar === "undefined");

myVar = "benny"; //add your name here
console.log(typeof myVar === "string");

//Comment them back out with two forward slashes at the beginning once you have finished

/* ========== *
 * Challenge 2 *
 * =========== */

function buildSentence(word1, word2, word3) {
  //your code goes here...
  let wordsOfOne = [...word1][0].toUpperCase(); // first word capital
  let restOfwords = word1.slice(1);
  let JoinedCapitalised = [wordsOfOne, ...restOfwords].join("");

  let sentense = `${JoinedCapitalised} ${word2} ${word3}.`;
  console.log(sentense);
}

buildSentence("coding", "is", "awesome"); //=> "Coding is awesome."
buildSentence("we're", "number", "1"); //=> "We're number 1."

/* ========== *
 * Challenge 3 *
 * =========== */

function lastLetter(word) {
  //your code goes here...
  let wordLength = [...word].length;
  let lastChar = [...word][wordLength - 1];
  console.log(lastChar);
}

//Uncomment the lines below to test your code
lastLetter("hello"); //=> "o"
lastLetter("goodbye!"); //=> "!"
lastLetter("ZeltoiD"); //=> "D"

/* ========== *
 * Challenge 4 *
 * =========== */

function buildGreeting(time, name) {
  //your code goes here...
  let greeting;
  if (time >= 0 && time <= 11) {
    greeting = `Good Morning, ${name}!`;
  } else if (time >= 12 && time <= 16) {
    greeting = `Good Afternoon, ${name}!`;
  } else if (time >= 17 && time <= 23) {
    greeting = `Good Evening, ${name}!`;
  } else {
    greeting = `"That's not a real time, ${name}. Maybe you need some sleep!`;
  }
  console.log(greeting);
}

buildGreeting(8, "Maggie"); //=> "Good Morning, Maggie!"
buildGreeting(12, "John"); //=> "Good Afternoon, John!"
buildGreeting(22, "Stacey"); //=> "Good Evening, Stacey!"
buildGreeting(31, "Derrick"); //=> "That's not a real time, Derrick. Maybe you need some sleep!"

/* ========== *
 * Challenge 5 *
 * =========== */

function indexOf(word, letter) {
  let ind = word.indexOf(letter);
  return ind;
}

console.log(indexOf("CodeSmith", "o") === 1);
console.log(indexOf("hello", "ll") === 2);
console.log(indexOf("zebra", "z") === 0);
console.log(indexOf("banana", "B") === -1);

/* ========== *
 * Challenge 6 *
 * =========== */

function letterExists(word, letter) {
  let exist = word.includes(letter);

  return exist;
}

letterExists("superman", "e"); //=> true
letterExists("starship", "S"); //=> false
letterExists("th1s", "1"); //=> true
letterExists("he!lo", "!"); //=> true
