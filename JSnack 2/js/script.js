// Creo un array di squadre di calcio con proprietà nome, punti fatti e falli subiti

const squadreDiCalcio = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Palermo",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// Assegno un valore casuale alle proprità puntiFatti e falliSubiti tramite un ciclo forEach che scorre l'array

squadreDiCalcio.forEach(squadra => {
    squadra.puntiFatti = Math.floor(Math.random() * 21);;
    squadra.falliSubiti = Math.floor(Math.random() * 11);;
    console.log(`Nome: ${squadra.nome}`);
    console.log(`Punti fatti: ${squadra.puntiFatti}`);
    console.log(`Falli subiti: ${squadra.falliSubiti}`);
    console.log(`- - - - - - - - -`);
});

// Creo un nuovo array usando .map e destrutturazione

const newArray = squadreDiCalcio.map(({nome, falliSubiti}) => ({nome, falliSubiti}));

// Stampo il nuovo array in console tramite un ciclo forEach

newArray.forEach(squadra => {
    console.log(`Nome: ${squadra.nome}`);
    console.log(`Falli subiti: ${squadra.falliSubiti}`);
    console.log('- - - - - - - - -');
});