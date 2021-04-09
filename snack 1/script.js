// utente inserisce due parole in successione con due prompt

 var parola1 = prompt("Inserisci la prima parola");
 var parola2 = prompt("Inserisci la seconda parola");

 //verifico le lunghezze delle parole. Viene stampata prima la parola più corta poi quella più lunga 
  if(parola1.length < parola2.length){
      console.log(parola1 + " " + parola2);
      
  } else if(parola2.length < parola1.length){
    console.log(parola2 + " " + parola1);
  }else {
      alert("le parole sono uguali");
  }