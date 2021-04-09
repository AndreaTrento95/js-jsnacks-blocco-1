// creo la lista degli invitati
var invitati = [
    "Luca",
    "Marco",
    "Aurelio",
    "Giacomo",
    "Andrea"
];

// chiedo all' utente il suo nome
var nome_utente = prompt("Inserisci il tuo nome");

// verifico se il nome dell'utente è all'interno della lista 
var presente = false; // flag di verifica
 for(var i = 0; i < invitati.length; i++){
     var invitato = invitati[i];
     if(nome_utente === invitato){
         presente = true;
         break;
     }
}

if(presente){
     console.log("Benvenuto! " + nome_utente);
}else{
     console.log("Non sei stato invitato... " + nome_utente);
}