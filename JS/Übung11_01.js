function countNucleotides(sequence) {
    let counts = { A: 0, C: 0, G: 0, T: 0 };

    for (let i = 0; i < sequence.length; i++) {
        let int = sequence[i];
        if (int in counts) {
            counts[int]++;
        }
    }

    console.log(`${counts.A} ${counts.C} ${counts.G} ${counts.T}`);
}

const input = "AACCGCCCGTT";
countNucleotides(input);