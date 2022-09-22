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

/* =========== *
 * Challenge 9 *
 * ============ */

function myIndexOf(array, ele) {
  // your code here...
  for (let i = 0; i < array.length; i++) {
    if (array[i] == ele) {
      console.log(i);
      return i;
    }
  }
  console.log(-1);
  return -1;
}

myIndexOf([1, 2, 3, 4, 5], 5); //=> 4
myIndexOf(["a", "b", "c"], "a"); //=> 0
myIndexOf(["a", "b", "c"], "d"); //=> -1

/* =========== *
 * Challenge 10 *
 * ============ */

function unique(array) {
  //your code goes here...
  let container = {};
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!container[array[i]]) {
      container[array[i]] = true;
      newArr.push(array[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

unique([1, 1, 2, 3, 3]); //=> [1, 2, 3]
unique(["a", "a", "c", "aa", "b", "b"]); // => ["a", "c", "aa", "b"]

/* ========== *
 * Extension 1 *
 * =========== */

function arrayBuilder(count) {
  // your code here...
  let arr = [];
  for (let [key, vals] of Object.entries(count)) {
    console.log(key, vals);
    for (let i = 0; i < vals; i++) {
      arr.push(key);
    }
  }
  return arr;
}

/* ========== *
 * Extension 2 *
 * =========== */

function objectBuilder(count) {
  // your code here...
  let obj = {};
  for (let i = 0; i <= count; i++) {
    obj[i] = 5 * i;
  }
  return obj;
}

//Uncomment the lines below to test your function:

console.log(objectBuilder(4)); //=> {
//   0: 0,
//   1: 5,
//   2: 10,
//   3: 15,
//   4: 20,
// }
console.log(objectBuilder(0)); //=> { 0: 0 }

/* ========== *
 * Extension 3 *
 * =========== */

function secretCipher(sentence, cipher) {
  // your code here...
}

//Uncomment the lines below to test your function:

// console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
// console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
// console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"

/* ========== *
 * Extension 4 *
 * =========== */

function passingStudents(students) {
  // your code here...
  let results = [];
  for (let i of students) {
    let name = i.name;
    let noOfSub = 0;
    let sumofgrades = 0;
    for (let j of i.grades) {
      sumofgrades += j.score;
      noOfSub++;
    }
    let average = sumofgrades / noOfSub;
    results.push({ name, average });
  }
  return results.filter((item) => {
    if (item.average > 70) return item.name;
  });
}

//Uncomment the lines below to test your function:

var students = [
  {
    name: "Marco",
    id: 12345,
    grades: [
      { id: 0, score: 65 },
      { id: 1, score: 75 },
      { id: 2, score: 85 },
    ],
  },
  {
    name: "Donna",
    id: 55555,
    grades: [
      { id: 0, score: 100 },
      { id: 1, score: 100 },
      { id: 2, score: 100 },
    ],
  },
  {
    name: "Jukay",
    id: 94110,
    grades: [
      { id: 0, score: 65 },
      { id: 1, score: 60 },
      { id: 2, score: 65 },
    ],
  },
];

console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]

function arrayBuilder(count) {
  // your code here...

  let elementArray = [];

  if (Object.keys(count).length < 1) {
    return elementArray;
  } else {
    function checkNum(val, key) {
      if (val <= 0) {
        return elementArray;
      }
      elementArray.push(key);
      return checkNum(val - 1, key); //0
    }

    for (let [key, vals] of Object.entries(count)) {
      checkNum(vals, key);
    }
  }

  return elementArray;
}
