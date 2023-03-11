var num1 = 10;
var num2 = 20.3;

console.log()
console.log(typeof(num1))
console.log(typeof(num2))
console.log()

// toString() Taking number as input and returns as string

console.log(num1.toString())
console.log(typeof(num1.toString()))
console.log()
console.log(num2.toString())
console.log(typeof(num1.toString()))

var strNum1 = "11";
var strNum2 = "11.5";
var strNum3 = "ABC";

// parseInt() String numeral as input and return as a number(Integer) 
console.log()
console.log(parseInt(strNum1))
console.log(typeof(parseInt(strNum1)))
console.log()
console.log(parseInt(strNum2))
console.log(typeof(parseInt(strNum2)))
console.log()
console.log(parseInt(strNum3))
console.log(typeof(parseInt(strNum3)))

// parseFloat() String numeral as input and return as a number(Float) 

console.log()
console.log(parseFloat(strNum1))
console.log(typeof(parseFloat(strNum1)))
console.log()
console.log(parseFloat(strNum2))
console.log(typeof(parseFloat(strNum2)))
console.log()
console.log(parseFloat(strNum3))
console.log(typeof(parseFloat(strNum3)))

// toFixed() takes  floating number and rounds it off to given position

console.log()
var strFloat = 87.987653
console.log(strFloat.toFixed())
console.log(strFloat.toFixed(2))
console.log(strFloat.toFixed(3))
console.log(strFloat.toFixed(4))
console.log(strFloat.toFixed(5))
console.log(strFloat.toFixed(6))

/*
Problem Statements
1. console.log(toString(100)) - object undefined
2. console.log(parseInt('44')) - 44
3. console.log(parseInt('22.222')) - 22
4. console.log(parseInt('Banana')) - Nan
5. console.log(parseFloat(12)) - 12
6. console.log(parseFloat(13.3)) - 13.3
7. var num1 = 10; console.log(num1.toFixed(2)) - 10.00
8. var num1 = 15.456789; console.log(num1.toFixed()) - 15
9. var num1 = 15.456789; console.log(number.toFixed(2)) - undefined
10. var num1 = 15.456789; console.log(num1.toFixed(3)) - 15.457

*/


