function getValues() {
    let a = document.getElementById("inputA").value;
    let b = document.getElementById("inputB").value;
    return [Number(a), Number(b)];
}

function calculateSum() {
    let [a, b] = getValues();
    document.getElementById("result").innerHTML = a + b;
}

function calculateSubtract() {
    let [a, b] = getValues();
    document.getElementById("result").innerHTML = a - b;
}

function calculateMultiply() {
    let [a, b] = getValues();
    document.getElementById("result").innerHTML = a * b;
}

function calculateDivide() {
    let [a, b] = getValues();
    if (b === 0) {
        document.getElementById("result").innerHTML = "Fehler: ÷0";
    } else {
        document.getElementById("result").innerHTML = a / b;
    }
}