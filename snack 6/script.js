//-------- ESERCIZIO -------
// stampa le potenze di due fino a 1000


// SOLUZIONE 1
var limite = 1000;
var potenza = 1;
var counterPotenza = 1; // contatore delle potenze

while(potenza < limite){
    console.log(potenza);
    console.log("elevo il 2 alla"+counterPotenza);
    potenza = Math.pow(2, counterPotenza);
    counterpotenza++;
}




// SOLUZIONE 2
var limite = 1000;
var potenza = 1;
var counterPotenza = 1; // contatore delle potenze

while(potenza < limite){
    console.log(potenza);
    potenza *=2;
}