
//1. keyword (Schlüsselwort): let
//2. variable (Variable): result
//3. expression (Ausdruck, Term): 1 + 2
//4. zuweisung (zuweisung): =
//5. terminierung (terminator, Abschluss eines Befehls): ;
//==> statement (Befehl): let result = 1 + 2;
let result = 1 + 2;

//6. function: console.log
//7. argument: result
//8. terminator: ;
//==> statement: console.log(result);
console.log(result);

// code blocks (Codeblöcke): statements belonging together
{
    //1. keyword: let
    //2. variable: a
    //3. assignment: =
    //4. constand: 10
    //5. terminator: ;
    let a = 10;
    let b = 20;

    let c = a + b;
    console.log(c);
    console.log(result);
}


//calculations

let a1 = 7;
let b1 = 3;

//addition
let summe = a1 + b1;


//subtraction
let difference = a1 - b1;

//division
let quotient = a1 / b1;

//modulo (rest bei einer division)
let remainder = a1 % b1;

//exponentiation (Potenzierung)
let power = a1 ** b1;

//expression
let expression = (a1 + b1) * b1;

//value assignment (Werte zuweisen)
a1 = 23;
b1 = 42;


//if statement
if (a1 < b1) {
    console.log("a1: " + a1);
    console.log("b1: " + b1);
    console.log("a1 is smaller than b1");
} else {
    console.log("a1 is not smaller than b1");
}


//if - else if - else statement
if (a1 == b1) {
    console.log("a1 is smaller than b1");
} else if (a1 < b1) {
    console.log("a1 is not smaller than b1");
} else {
    console.log("a1 is greater than b1")
}

//loops (Schleifen)
//for loop
for (let i = 0; i < 5; i++) {
    console.log("durchlauf: " + i);
    console.log(i);
}


//comparison operators

//equal to
console.log(1 == 1); //true (wahr)

//not equal (nicht gleich)
console.log(1 != 1); //false (falsch)

//greater than (größer als)
console.log(1 > 1); //false

//greater than or equal to (größer oder gleich
console.log(1 >= 1); // true (wahr)

//less than (kleiner als)
console.log(1 < 1); //false (falsch)

//less than or equal to (kleiner oder gleich)

console.log(1 <= 1); //true (wahr)


//Values and Types
integer = 213; //Ganzzahl
floatingPoint = 3.1415926; //Gleitkommazahl
boolean = true; //Wahrheitswert (true or false)
string1 = "Hello World!"; //Zeichenkette
string2 = "it is great"; //Zeichenkette
string3 = "it's great"; //Zeichenkette

//concatenation (Verkettung) of strings
string4 = string1 + string2;
console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);

//concatenation of strings and numbers
a1 = 10;
b1 = 20;
result = a1 + b1;
console.log("The result is: " + result);



//loops (Schleifen)
//for loop

console.log("Hannes");
console.log("Hannes");
console.log("Hannes");


for (let i = 0; i < 10; i = i + 1) {   // i = i + 1 ist dasselbe wie i++
    console.log("Hannes");
}


//function
function summ(n1, n2) {
    return n1 + n2
}


let n1 = 5;
let n2 = 10;

let resultSum = n1 * n2;


//function kx + d, k=10, d=5
function linearStraight(x) {
    return 20 * x + 5
}


//1. keyword "function"
//2. name of the function we want to declare
//3. ()
//4. with the bracket we can hand in parameters to the function
//5. opening curly brace {
//6. statements
//7. optionally a return
//8. closing curly brace }
function log(text, repeat) {

    // for loop:
    //1. declare variable i and initialize it to 1: let i = 1
    //2. check the conditional expression if it still evaluates to true
    //3. if the condistion is still true, then execute statements within the curly braces {  }
    //4. i = i + 1 => i = 1 => i = 1 + 1 => i = 2
    //5. check the conditial expression if it still evaluates to true
    //   (i < result), i = 2 and repeat = 10 => 2 < 10 => true
    for (let i = 1; i < repeat; i++) {
        console.log(i + ": " + text)
    }
    console.log("value i is: " + i)
}

console.log("value of texs is " + i)


log("Hallo Welt", 10);
log("Hello World", 5);