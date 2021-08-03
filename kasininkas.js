async function kasininkas(price, cash) {
    return new Promise((res, rej) => {
        // let gotCash = ''

        //paprastas for variantas:

        // for (i = 0; i < cash.length; i++) {
        //     gotCash += i !== cash.length - 1 ? `${cash[i]}, ` : `${cash[i]}`
        //     suma += cash[i];
        // }

        //array skaiciu isspausdinimas panaudojant JOIN metoda:

        let gotCash = cash.join(', ');

        console.log(`Priimtos kupiuros: ${gotCash}.`)
        let suma = 0;

        //susirandam bendra suma

        for (const number of cash) {
            suma += number;
        }
        //pasiruosiam kintamaji atsakymui pagal duotas salygas ir priskiriam jam atitinkama teksta(reiksme):

        let answer = '';

        if (price < suma) {

            answer = `"Aciu, jog pirkote! Stai jusu graza - ${suma - price} pinigu!"`;
        } else if (price === suma) {
            answer = "Aciu, jog pirkote!";
        } else {
            answer = "Nepakanka pinigu!";
        }
        //paleidziam atsakymo spausdinimo uzdelsima
        setTimeout(() => {

            res(answer)
        }, 2000)
    })
}

module.exports = kasininkas;