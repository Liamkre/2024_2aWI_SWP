const data2 = "1,2,3,4,5,6,7,8,9,10,11,12";

const zahlen = data2.split(",").map(Number);

let geradeSumme = 0;
let ungeradeSumme = 0;

for (let zahl of zahlen) {
    if (zahl % 2 === 0) {
        geradeSumme += zahl;
    } else {
        ungeradeSumme += zahl;
    }
}

const ergebnis = geradeSumme / ungeradeSumme;
console.log("Summe gerade:", geradeSumme);
console.log("Summe ungerade:", ungeradeSumme);
console.log("Ergebnis (gerade / ungerade):", ergebnis);