/*Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna
varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.*/

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

//Creo una costante che mi indica il peso totale
const pesoTotale = 0

//Creo un ciclo che mi calcola il peso di ogni zucchina
for(let i=0; i < zucchina.length; i++){
    pesoTotale+= zucchina[i].peso;
}

console.log(`Tutte le zucchine pesano ${pesoTotale} grammi`)