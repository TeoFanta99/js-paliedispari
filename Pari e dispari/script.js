/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.
*/


// inserisci un numero da 1 a 5
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

// scegli tra "pari" e "dispari"
const userChoice = prompt("Scegli tra pari e dispari");
console.log(userChoice);


// crea la funzione che genera un numero random tra 1 e 5
function numRandom (min, max) {
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    return randomNum;
}


// genera il numero del computer
let computerNumber = numRandom(1, 5);
console.log(computerNumber);


// funzione che somma i numeri
function sommaNumeri (num1, num2) {
    let sommaDeiNumeri = num1 + num2;
    return sommaDeiNumeri;
}

// sommare i due numeri con la funzione
let sommaDeiNumeri = sommaNumeri(userNumber, computerNumber);
console.log(sommaDeiNumeri);


// check se pari o dispari
if (sommaDeiNumeri % 2) {
    result = "dispari";
} else {
    result = "pari";
}

// hai vinto o hai perso
if (userChoice === result) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}

