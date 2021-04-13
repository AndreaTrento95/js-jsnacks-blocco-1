// ESERCIZIO: Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

// Chiedo all'utente di inserire un numero a quattro cifre
var num_utente = (prompt("Inserisci un numero a quattro cifre"));

var somma = 0;

for(var i = 0; i < num_utente.length; i++){
    var numero = parseInt(num_utente[i]);
    somma = somma + numero;
}

// output
console.log(somma);


