const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
  ];

// Utilizzo filter per creare un nuovo array con le auto alimentate a benzina

const autoBenzina = automobili.filter((auto) => {
    return auto.alimentazione === "benzina";
});

console.log(autoBenzina);

// Utilizzo filter per creare un nuovo array con le auto alimentate a diesel

const autoDiesel = automobili.filter((auto) => {
    return auto.alimentazione === "diesel";
});

console.log(autoDiesel);

// Utilizzo filter per creare un nuovo array con le altre auto

const altreAuto = automobili.filter((auto) => {
    return auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel"
});

console.log(altreAuto);

