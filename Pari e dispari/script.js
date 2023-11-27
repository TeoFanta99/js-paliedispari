/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.
*/


// inserisci un numero da 1 a 5
const userNumber = prompt("Scegli un numero da 1 a 5");
console.log(userNumber);

// scegli tra "pari" e "dispari"
const userChoice = prompt("Scegli tra pari e dispari");
console.log(userChoice);

// crea la funzione che genera in automatico il numero del computer
function numRandom (min, max) {
    const randomNum = Math.floor(Math.random() * (max-min)) + min;
    return randomNum;
}

// genera il numero del computer
const computerNumber = numRandom(1, 5);
console.log(computerNumber);


// sommiamo i due numeri
const sumOfNumbers = (+userNumber + +computerNumber);
console.log(sumOfNumbers);


// funzione per stabilire se pari o dispari
function pariOppureDispari (sumOfNumbers) {

    if (sumOfNumbers % 2) {
        console.log("dispari");
    } else {
        console.log("pari");
    }
}

pariOppureDispari(sumOfNumbers);





