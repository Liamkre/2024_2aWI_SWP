
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
let sum = a1 + b1;


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


console.log(sum);
console.log(difference);
console.log(quotient);
console.log(remainder);
console.log(power);
console.log(expression);

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