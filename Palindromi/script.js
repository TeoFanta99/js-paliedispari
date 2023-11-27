/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// chiedere all'utente una parola
const parola = prompt("Inserisci una parola");
console.log(parola);

// caratteri della parola
let carattere


// parola inversa
let parolaInvertita = "";


// elemento
let i = parola.length - 1;


// ciclo while
while (i >= 0) {
    carattere = parola[i];
    parolaInvertita += carattere;
    console.log(carattere);
    i--;
}

console.log(parolaInvertita);


// esito
if(parola == parolaInvertita){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}
