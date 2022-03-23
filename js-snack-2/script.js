/*Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati 
le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/

//Creo una funzione con all'interno un ciclo che mi somma il peso delle zucchine
function sommaPeso(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        somma += array[i].peso;
    }
    return somma;
}

//Creo un array di 10 oggetti che rappresentano una zucchina
const zucchina = [
    {
        varietà: "nera",
        peso: 20,
        lunghezza: 19
    },
    {
        varietà: "viola",
        peso: 220,
        lunghezza: 14
    },
    {
        varietà: "albina",
        peso: 30,
        lunghezza: 16
    },
    {
        varietà: "arancione",
        peso: 10,
        lunghezza: 11
    },
    {
        varietà: "bianca",
        peso: 210,
        lunghezza: 16
    },
    {
        varietà: "napoletana",
        peso: 330,
        lunghezza: 18
    },
    {
        varietà: "francese",
        peso: 67,
        lunghezza: 12
    },
    {
        varietà: "romana",
        peso: 40,
        lunghezza: 14
    },
    {
        varietà: "milanese",
        peso: 43,
        lunghezza: 13
    },
    {
        varietà: "toscana",
        peso: 20,
        lunghezza: 19
    },
]

/*Divido in due array separati 
le zucchine che misurano meno o più di 15cm.*/

const zucchineSmall = [];
const zucchineBig = [];

//Creo un ciclo che pusha le zucchine negli array in base alla lunghezza.

for(let i=0; i < zucchina.length; i++){
    if(zucchina[i].lunghezza <= 15){
    zucchineSmall.push(zucchina[i]);
    }else{
        zucchineBig.push(zucchina[i]);
    }
}

console.log(zucchineBig);
console.log(zucchineSmall);

/*Creo delle variabili che, agganciate alla funzione creata sopra, calcolano la somma
del peso delle zucchine di ciascun array.*/
const sommaCorte = sommaPeso(zucchineSmall);
const sommaLunghe = sommaPeso(zucchineBig);

console.log(`Le zucchine corte pesano in tutto ${sommaCorte} grammi`);
console.log(`Le zucchine lunghe pesano in tutto ${sommaLunghe} grammi`);

