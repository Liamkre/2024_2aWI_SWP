

function calculateSum() {
    console.log("Calculate clicked!")


    let inputA = document.getElementById("inputA").value;
    let inputB = document.getElementById("inputB").value;

    console.log("inputA: " + inputA);
    console.log("inputB: " + inputB);

    let result = Number(inputA) + Number(inputB);

    console.log(result);

    console.log(typeof inputA);
    console.log(typeof inputB);

    let resultElement = document.getElementById("result")
    resultElement.innerHTML = result;
} 