// creo un'array vuoto 
var arr = [];

// chiedo all'utente di inserire un numero per 6 volte con il ciclo for, inserire i num dispari nell'array
for(i = 0; i < 6; i++){
    var numero_utente = parseInt(prompt("inserisci un numero"));

    if(numero_utente % 2 !=0 ) {
       arr.push(numero_utente);
    }
}

// output
console.log(arr);