function generateRandom() { //erledigt mit Tolunay
    const min = Number(document.getElementById("minValue").value);
    const max = Number(document.getElementById("maxValue").value);
    const output = document.getElementById("output");


    if (min > max) {
        output.textContent = "Der untere Wert darf nicht größer als der obere sein.";
        return;
    }

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    output.textContent = `Zufallszahl: ${randomNum}`;
}