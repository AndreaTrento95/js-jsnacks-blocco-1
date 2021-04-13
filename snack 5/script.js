// creo un ciclo per chiedere 5 volte all'utente di inserire un numero per poi elevarlo al cubo
var numero_utente;

for(var i = 0; i < 5; i++){
    numero_utente = parseInt(prompt("inseriesci un numero"));
    var cubo = Math.pow(numero_utente, 3);
    console.log(cubo);
}




// ------ CORREZIONE -------
// richiedo il numero all'utente

var limite = parseInt(prompt("Di quanti numeri vuoi sommare il cubo?"));

// inizializzo una var per la somma
var somma = 0;

// creo un ciclo dove calcolo i cubi e li sommo
for(var i = 1; 1 <= limite; i++){
    somma += Math.pow(1,3);
}

// output
console.log("la somma dei cubi è "+somma);





