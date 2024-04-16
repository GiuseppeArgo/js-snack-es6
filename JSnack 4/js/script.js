// Creo un array di persone

const persone = [
    { nome: "Pippo", cognome: "Disney", eta: 18 },
    { nome: "Pluto", cognome: "Disney", eta: 16 },
    { nome: "Paperino", cognome: "Disney", eta: 17 },
    { nome: "Topolino", cognome: "Disney", eta: 35 }
];

// Uso map per creare una nuova array partendo dalla prima e impostando le condizioni del caso

const personePatente = persone.map(persona => {
    if(persona.eta >= 18) {
        return `${persona.nome} ${persona.cognome} può avere la patente.`;
    } else {
        return `${persona.nome} ${persona.cognome} non può avere la patente.`;
    }
});

// Stampo in console

console.log(personePatente);