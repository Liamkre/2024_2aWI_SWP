// 1. keyword (Schlüsselwort): let
// 2. variable (Variable): result
// 3. expression (Ausdruck, Term): 1 + 2
// 4. assignment (Zuweisung): =
// 5. terminator (Abschluss eines Befehls): ;
// ==> statement (Befehl): let result = 1 + 2;
let result = 1 + 2 // 3

// 7. argument or parameter: result
// 8. terminator: ;
// ==> statement: console.log(result);
console.log(result)

// code blocks (Codeblöcke): statements beloging together
{
  // 1. keyword: let
  // 2. variable: a
  // 3. assginment: =
  // 4. constsand: 10
  // 4. terminator: ;
  let a = 10
  let b = 20

  let c = a + b

  console.log(c)
  console.log(result)
}

//console.log(a); // ReferenceError: a is not defined

// calculations

let a1
let b1

a1 = 7
b1 = 3

// addition
let sum = a1 + b1 // 10

// subtraction
let difference = a1 - b1 // 4

// multiplication
let product = a1 * b1 // 21

// division
let quotient = a1 / b1 // 2.33333333333333...

// modulo (Rest eine ganzuahligen Division)
let remainder = a1 % b1 // 1

// exponentiation (Potenzierung)
let power = a1 ** b1 // 343

// expression
let expression = (a1 + b1) * b1 // 30

// value assigment (Werte zuweisen)
a1 = 13
b1 = 42

// output (Ausgabe auf der Konsole)
console.log("a1: " + a1)
console.log("b1: " + b1)

// comparison operators

// equal to (ist gleich)
console.log(1 == 1) // true (wahr)

// not equal (nicht gleicht)
console.log(1 != 1) // false (falsch)

// greater than (größer als)
console.log(1 > 1) // false (falsch)

// greater than or equal to (größer oder gleich)
console.log(1 >= 1) // true (wahr)

// less than (kleiner als)
console.log(1 < 1) // false (falsch)

// less than or equal to (kleiner oder gleich)
console.log(1 <= 1) // true (wahr)

// Values and Types

// primitive data types (primitive Datentypen)
let integer = 213 // Ganzzahl
let floatingPoint = 3.1415926 // Gleitkommazahl
let boolean = true // Wahrheitswert (true oder false)

// strings (Zeichenketten)
let string1 = "Hello World!"
let string2 = "it is great"
let string3 = "it's great"

// concatenation (Verkettung) of strings
let string4 = string1 + " .... " + string2
console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

// concatenation of strings and numbers
// side note:
//      a1 and b1 as well as result are declared and initialized above
//      so we do not need to do it again
a1 = 10
b1 = 20
result = a1 + b1
console.log("The result is: " + result)

// if statement
if (a1 < b1) {
  console.log("a1 is smaller than b1")
}

// if - else statement
if (a1 < b1) {
  console.log("a1 is smaller than b1")
} else {
  console.log("a1 is not smaller than b1")
}

// if - else if - else statement
if (a1 == b1) {
  console.log("a1 equals b1")
} else if (a1 < b1) {
  console.log("a1 is not smaller than b1")
} else {
  console.log("a1 is greater than b1")
}

// loops (Schleifen)
// for loop

console.log("Hannes")
console.log("Hannes")
console.log("Hannes")

for (let i = 0; i < 10; i = i + 1) {
  console.log("Durchlauf: " + i)
  console.log("Hannes")
}

let i = 0
console.log(i) // 0s

for (let i = 0; i < 10; i++) {
  console.log("Durchlauf: " + i)
  console.log("Stauss")
}

{
  let i = 1
  console.log(i) // 1
  {
    let i = 2
    console.log(i) // 2
    {
      // let i = 3;
      console.log(i) // 2
    }
  }
}

let sumOfEvenNumbers = 0
for (let i = 0; i < 10; i = i + 1) {
  if (i % 2 == 0) {
    sumOfEvenNumbers = sumOfEvenNumbers + i
  }
  console.log("Durchlauf: " + i)
  console.log("Hannes")
}

// functions
function sumup(n1, n2) {
  return n1 + n2
}

let n1 = 5
let n2 = 10

let resultSum = n1 * n2

resultSum = sumup(5, 10)

// function kx + d, k=10, d=5
function linearStraigt(x) {
  return 10 * x + 5
}

sumup(10, 15)

// 1. keyword "function"
// 2. name of the function we want to declare
// 3. ()
// 4. with the bracket we can hand in parameters to the function
// 5. opening curly brace {
// 6. statements
// 7. optionally a return
// 8. closing curly brace }
function log(text, repeat) {
  // for loop:
  // SIDE NOTE: we assume here that repeat = 3 for the following comments
  // 1. declare variable i and initialize it to 1: let i = 1
  // 2. check the conditial expression if it still evaluates to true:
  //    (i < result), i = 1 and repeat = 3 => 1 < 3 => true
  // 3. if the condition is still true, then execute statements within the curly braces,
  //    in our case this is to execute the statement "console.log(i + ": " + text);"
  // 4. i = i + 1 => i = 1 => i = 1 + 1 => i = 2
  // 5. check the conditial expression if it still evaluates to true:
  //    (i < result), i = 2 and repeat = 3 => 2 < 3 => true
  // 6. if the condition is still true, then execute statements within the curly braces,
  //    in our case this is to execute the statement "console.log(i + ": " + text);"
  // 7. i = i + 1 => i = 2 => i = 2 + 1 => i = 3
  // 8. check the conditial expression if it still evaluates to true:
  //    (i < result), i = 3 and repeat = 3 => 3 < 3 => false
  //    => stop the loop continue after the loop
  // 9. execute the statement after the loop "console.log("value i is: " + i);"

  // outer scope of the for loop
  let i = 100

  for (let i = 1; i < repeat; i = i + 1) {
    // inner scope of the for loop
    // i is always resolved (gesucht) from the inner scope to the outer scope
    // because the for loop redeclares i, the following statement finds i from the for loop
    // with the initial value of 1 and NOT the i that is declared in the outer scope
    // with the value 100
    console.log(i + ": " + text)
  }

  // here we are in the outer scope again and hence i has the value 100
  console.log("value i is: " + i)
}

// console.log("value of texs is: " + text); => cannot be executed because it is only valid within the scope of the fucntion log
console.log("value i is: " + i)

log("hallo welt", 10)
log("hello world", 5)

// constant delcation
// the value MAX can be assigned only once
const MAX = 100

const sumFuncVar = function (a, b) {
  return a + b
}

sumFuncVar(10, 20)


//Arrays

let numbers = [1, 2, 3, 4, 5] // array of numbers

console.log(numbers[0]) // 1
console.log(numbers[1]) // 2
console.log(numbers[2]) // 3
console.log(numbers[3]) // 4


//strings

let text = "Hello World!"
console.log(numbers[0]) // H
console.log(numbers[1]) // e
console.log(numbers[2]) // l
console.log(numbers[3]) // l
console.log(numbers[4]) // o

// for loop / loop over an array
console.log("for loop over an array")
for (let i = 0; i < numbers.length; i++) {
  console.log("index " + i + ": " + numbers[i])
}


const printNumber = (n) => {
  console.log(n)
}


numbers.forEach(printNumber)
