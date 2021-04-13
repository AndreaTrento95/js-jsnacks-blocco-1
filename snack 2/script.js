// chiedo all'utente di inserire un numero x 10 volte

var numero1 = parseInt(prompt("inserisci un numero"));
var numero2 = parseInt(prompt("inserisci un numero"));
var numero3 = parseInt(prompt("inserisci un numero"));
var numero4 = parseInt(prompt("inserisci un numero"));
var numero5 = parseInt(prompt("inserisci un numero"));
var numero6 = parseInt(prompt("inserisci un numero"));
var numero7 = parseInt(prompt("inserisci un numero"));
var numero8 = parseInt(prompt("inserisci un numero"));
var numero9 = parseInt(prompt("inserisci un numero"));
var numero10 = parseInt(prompt("inserisci un numero"));

// il programma stampa la somma di tutti i numeri 
document.getElementById("output").innerHTML = (numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9 + numero10);




//ALTERNATIVA con ciclo for
// creo una var per la somma

var somma = 0;

// creo un ciclo con 10 iterazioni dove chiedo il prompt e sommo i dati

for(var i = 0; i < 10; i++){
    var nuovo_numero = parseInt(prompt("inserisci un numero"));
    somma += nuovo_numero;
    if(nuovo_numero = isNaN( Number)){
        alert("not a number");
    }
}

