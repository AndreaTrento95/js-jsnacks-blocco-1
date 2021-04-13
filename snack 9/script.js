// ESERCIZIO: Calcola la somma e la media dei primi 10 numeri.

// creo una var che contiene la somma dei numeri da 1 a 10 
var numero_somma = 0;

// creo un ciclo for per prendere i primi 10 numeri e sommarli
for(var i = 1; i < 11; i++){
     numero_somma += i;
}

// media 
var media = numero_somma / 10;

// output
console.log(media);
