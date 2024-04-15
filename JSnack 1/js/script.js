// Definisco un array di bici

const myBikeArray = [
    {
        nome: "bici1",
        peso: 7.3
    },
    {
        nome: "bici2",
        peso: 6
    },
    {
        nome: "bici3",
        peso: 7
    },
    {
        nome: "bici4",
        peso: 8
    }
]

// Imposto una variabile flag 

let myBike = myBikeArray[0];

// Scorro l'array e paragono i pesi delle bici 

myBikeArray.forEach(bike => {
    if (bike.peso < myBike.peso) {
       myBike = bike;
       console.log(myBike);
    }
});

// Estraggo nome e peso della bici con il peso minore

const {nome, peso} = myBike;

// Li stampo in console

console.log(`La bici più leggera è ${nome} con un peso di ${peso}`);