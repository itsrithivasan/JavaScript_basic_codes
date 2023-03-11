
var myFirstString = "This is a string for Javascript string functions, Javascript"

// Returns the length of the string
console.log(myFirstString.length)

// Find index of a string inside another string
console.log(myFirstString.indexOf('Javascript'))
console.log(myFirstString.indexOf('This'))

// Find LAST index of a string inside another string
console.log(myFirstString.lastIndexOf('Javascript'))
console.log(myFirstString.lastIndexOf('This'))

// Get a part of our string slice(start, end)
console.log(myFirstString.slice(0, 4))
console.log(myFirstString.slice(21, 31))
console.log(myFirstString.slice(-10))
console.log(myFirstString.slice(5))

// Get sub string function - substr(startPos, length)
console.log(myFirstString.substr(0, 4))
console.log(myFirstString.substr(21, 10))
console.log(myFirstString.substr(21))



// Problem statement

// Q. Answer the following questions. Also, explain why do you think that your answer is
// correct.

var mStr = "This is my test string to practice the JavaScript string function concepts.This is gonna be fun."

// 1. Find the length of the first sentence in the string. - 73
// 2. Find the length of the second sentence in the string. - 20
// 3. Find the first and last occurrence of the word "This". - 0 , 75
// 4. Find the sub-string with length 12 from the START of the string mStr. -This is my t
// 5. Find the sub-string with length 12 from the END of the string mStr.