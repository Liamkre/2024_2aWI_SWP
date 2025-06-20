function berechneMiete() {
    const p = 20;  // Stundenlohn
    const h = 100; // Stunden im Monat
    const r = 600; // Miete

    const einkommen = p * h;

    let ergebnis;
    if (einkommen > r) {
        ergebnis = "YES";
    } else if (einkommen === r) {
        ergebnis = "BARELY";
    } else {
        ergebnis = "NO";
    }

    console.log(ergebnis);
}

berechneMiete();