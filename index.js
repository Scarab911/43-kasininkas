/*
Sklinda kalbos, jog kasininkai nera robotai ir jie paeme pinigus is pirkejo juos i kasa ideda per 2 sekundes.

Ka tik paemes pinigus, kasininkas isspaudina visas gautas kupiuras: "Priimtos kupiuros: X, Y, Z."

Jei pirkejas duoda reikiama pinigu suma, kasininkas sako: "Aciu, jog pirkote!"
Jei pirkejas duoda per maza pinigu suma, kasininkas sako: "Nepakanka pinigu!"
Jei pirkejas duoda per didele pinigu suma, kasininkas sako: "Aciu, jog pirkote! Stai jusu graza - XYZ pinigu!"
*/

const kasininkas = require('./kasininkas');

(async () => {
    // Reikia patiems iskviesti funkcija ir jai duoti tokias reiksmes:
    // a) kaina: 100; kupiuros: [20, 50]
    // b) kaina: 100; kupiuros: [20, 50, 20, 10, 5, 5]
    // c) kaina: 100; kupiuros: [50, 20, 10, 5, 5, 10]
    // Po kiekvieno iskvietimo, privalu isspausdinti kasininko atsakymus.

    const a = await kasininkas(100, [20, 50]);
    console.log(a);
    const b = await kasininkas(100, [20, 50, 20, 10, 5, 5]);
    console.log(b);

    const c = await kasininkas(100, [50, 20, 10, 5, 5, 10])
    console.log(c);
})();