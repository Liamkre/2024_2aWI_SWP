function closestToZero(temps) { //Zusammen mit Tolunay gearbeitet
    if (temps.length === 0) return 0;

    let closest = temps[0];

    for (let i = 1; i < temps.length; i++) {
        let current = temps[i];

        if (Math.abs(current) < Math.abs(closest) ||
            (Math.abs(current) === Math.abs(closest) && current > closest)) {
            closest = current;
        }
    }

    return closest;
}


let input = [3, -2, -8, 4, 5];
console.log(closestToZero(input)); 
