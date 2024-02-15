/* ========== *
* Challenge 1 *
* =========== */

//Uncomment the lines below to test your code
console.log(typeof 7.0 === "number")
console.log(typeof 22 === "number")
console.log(typeof true === "boolean")

// var myVar;
console.log(typeof myVar === "undefined")

// myVar = "Tonny"
console.log(typeof myVar === "string")

//Comment them back out with two forward slashes at the beginning once you have finished

/* ========== *
* Challenge 2 *
* =========== */


function buildSentence(word1, word2, word3) {
  //your code goes here...
		let newWord = word1.substring(0,1).toUpperCase() + word1.substring(1,) + " " + word2 + " " + word3
  console.log(newWord)
	  
  
}

buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
buildSentence("we're", "number", "1") //=> "We're number 1."


/* ========== *
* Challenge 3 *
* =========== */


function lastLetter(word) {
  //your code goes here...
  // let lastLetter = word.substring(word.length -1)
  // console.log(lastLetter)
  // return lastLetter
  
  console.log(word[word.length-1])
}

//Uncomment the lines below to test your code
lastLetter("hello") //=> "o"
lastLetter("goodbye!") //=> "!"
lastLetter("ZeltoiD") //=> "D"


/* ========== *
* Challenge 4 *
* =========== */


function buildGreeting(time, name) {
  //your code goes here...
  let greeting = ""
  if (time > 3 && time < 11){
    greeting = "Good Morning,"
	}
   if (time > 11 && time < 19){
    greeting = "Good Afternoon,"
   }
   if (time > 19 && time < 24){
    greeting = "Good Evening,"
	}
     
    if (time > 24){
			greeting ="That's not a real time,"
     }
  
	let r =  greeting + " " + name + "!"
  console.log(r)
}


buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
buildGreeting(12, "John") //=> "Good Afternoon, John!"
buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"


/* ========== *
* Challenge 5 *
* =========== */


// console.log( indexOf("CodeSmith", "o") === __ )
// console.log( indexOf("hello", "ll") === __ )
// console.log( indexOf("zebra", "z") === __ )
// console.log( indexOf("banana", "B") === __ )


/* ========== *
* Challenge 6 *
* =========== */


function letterExists(word, letter) {
  //your code goes here...
  let exists = word.includes(letter)
  console.log(exists)

}

// letterExists("superman", "e") //=> true
// letterExists("starship", "S") //=> false
// letterExists("th1s", "1") //=> true
// letterExists("he!lo", "!") //=> true


/* =========== *
* Challenge 7 *
* ============ */


function isPrime(number) {
  // your code here...
    if (Math.sign(number) == -1){
      console.log(false)
    return false
  }
      if (number < 2) {
         console.log(false)
        return false;
    }
    
    // Loop from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible by any integer other than 1 and itself, it's not prime
        if (number % i === 0) {
           console.log(false)
            return false;
        }
    }
    
    // If the loop completes without finding a divisor, the number is prime
   console.log(true)
    return true;


}

isPrime(-7); // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false


/* ========== *
* Challenge 8 *
* =========== */


function range(start, end) {
  //your code goes here...
 for (let i = start; i <= end; i++){
		console.log(i)
 }
}

//Uncomment the lines below to test your code
// range(1,4) //=> 1, 2, 3, 4
range(4,2) //=>


/* =========== *
* Challenge 9 *
* ============ */


function myIndexOf(array, ele){
  // your code here...
 let index = array.indexOf(ele)
 console.log(index)

}

myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
myIndexOf(["a", "b", "c"], "a") //=> 0
myIndexOf(["a", "b", "c"], "d") //=> -1


/* =========== *
* Challenge 10 *
* ============ */

function unique(array) {
  //your code goes here...
  let unique_array = new Set(array)
  let arr_from = Array.from(unique_array)
  console.log(arr_from)
	
}

unique([1, 1, 2, 3, 3]) // => [1, 2, 3]
unique(["a", "a", "c", "aa", "b", "b"])//  => ["a", "c", "aa", "b"]


/* =========== *
* Challenge 11 *
* ============ */

function longestWord(sentence) {
  // your code here...
  let array_of_words = sentence.split(" ") //my name is
  
  const longestword = array_of_words.reduce((longest, currentWord) =>{
    
    if(currentWord.length > longest.length){
			return currentWord
    } else {
			return longest
    }
    
  }, "")
  
  return longestword

}

//Uncomment the lines below to test your function:

console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
console.log(longestWord('JavaScript')); // => 'JavaScript'
console.log(longestWord('')); // => ''


/* =========== *
* Challenge 12 *
* ============ */

function disemvowel(string) {
  // your code here...
 let words = string.split('')
 const vowels = ["a","e","i","o","u"]
 let res = words.filter(char => !vowels.includes(char))
 
 console.log(res.join(""))
  
}

