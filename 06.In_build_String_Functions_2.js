
var exampleString = "This is Javascript tutorial"

// toUpperCase() - It converts our string -> uppercase characters
console.log(exampleString.toUpperCase())

// toLowerCase() - It converts our string -> lowercase characters
console.log(exampleString.toLowerCase())

// concat() - It merges two or more strings
var firstName = "Javascript"
var lastName = "Playground"
console.log(exampleString.concat(firstName))
console.log(exampleString.concat(' ', firstName, ' ', lastName))

// We can also use '+' to concat two or more strings
console.log(firstName + ' ' + lastName + ' ' + exampleString)

// trim() - It removes extra spaces
var extraSpaceString = '        mystring     '
console.log(extraSpaceString.trim())

var extraSpaceStringExample2 = '      my string    '
console.log(extraSpaceStringExample2.trim())

// charAt() -> this take a position as an arg and returns the character at that position
var charAtExampleString = 'This is my test string'
console.log(charAtExampleString.charAt(5))
console.log(charAtExampleString.charAt(11))


// split() splits our string on the basis of the arguments passed

var sampleString = "This is my sample string"
console.log(sampleString.split(' '))

var sampleString2 = "This,is,my,sample,string"
console.log(sampleString2.split(','))

var sampleString3 = "This is awesome"
console.log(sampleString3.split())


// Problem Statements

// Try to answer the following questions. Post your answers in the comment section below. Also, try to explain why do you think your answer is correct. Best of Luck!!

var str1 = 'Today is';
var str2 = '   A beautiful day   '
var str3 = ' In Hawaii.   '
// Result = 'Today is a beautiful day in Hawaii.'

// 1. Use the str1, str2, str3 to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.
console.log(str1 + ' ' + (str2.toLowerCase().trim()) + str3.toLowerCase() )

// 2. Convert this string to an array which holds different days. Also, capitalize all the characters
var mStr = 'Mo Tu We Th Fr Sa Su'

console.log((mStr.toUpperCase()).split(' '))