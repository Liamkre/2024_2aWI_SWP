/*
Du hast eine Folge von Zahlen die durch ein Leerzeichen getrennt sind.

Beispiel:
"1 2 3 4 5"

Berechne die Summe der der geraden Zahlen aus der Eingabe und gib die Summe auf der console aus.

Beispiel mit obiger Eingabe:
6
*/

function sumEvenNumbers(input) {
    let sum = 0;
    let numbers = input.split(" ");

    for (let num of numbers) {
        if (num % 2 === 0) {
            sum += Number(num);
        }
    }

    console.log(sum);
}


sumEvenNumbers("1 2 3 4 5 6"); 