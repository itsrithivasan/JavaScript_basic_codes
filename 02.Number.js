var num1 = 10 // Integer
var num2 = 10.9 // Decimal Number

console.log(typeof(num1))
console.log(typeof(num2))

console.log()

// Addition
var num3 = 15
var sum = num3 + num1 + num2
console.log(sum)

console.log()

//Substraction

var diff = num3 - num1
console.log(diff)

console.log()

//multiplication
var diff = num3 * num1
console.log(diff)

console.log()

// Division
var diff = num3 / num1
console.log(diff)

console.log()

var divbyzero = num3 / 0
console.log(divbyzero)
console.log(typeof(divbyzero))

console.log()

var mulBystring = num3 * 'A'
console.log(mulBystring)
console.log(typeof(mulBystring))


/* Number store the value in float64 type in order like
 - (0 to 51) for storing values
 - (52 to 62) for storing exponent
 - (63) for storing sign
*/

/*
Practice Problems:
1. console.log(0 / 0)  - Nan
2. console.log(0 / 5)  - 0
3. console.log(3 * 'a')- Nan
4. console.log('a' * 3) - Nan
5. console.log('b' + 4) - b4
6. console.log(4 + 'b') - 4b
7. console.log(5 - 'c') - Nan
8. console.log('c' - 5) - Nan
*/