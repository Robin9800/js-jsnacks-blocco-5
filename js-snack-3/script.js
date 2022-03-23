/* Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */

function reverse(word) {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {

        reverseWord += word[i];

    }
    return reverseWord;
}

//Chiedo all'utente di inserire una parola
let userWord = prompt("Inserisci una parola");

//Creo una variabile e la collego alla funzione.
const wordToInvert = reverse(userWord);

console.log(wordToInvert);