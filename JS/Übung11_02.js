function inverted(binary) {
    let result = "";

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "0") {
            result += "1";
        } else {
            result += "0";
        }
    }

    return result;
}

let binary = "101010";
let result = inverted(binary);

console.log(result);