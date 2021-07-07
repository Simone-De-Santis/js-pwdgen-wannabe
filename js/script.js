// commento barra singola


/*commento multi linea
ciao ciao ciao
ciao ciao
*/


/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

/*
1- variante per il nome
2- variante per il cognome
3- variante per il colore
4- chiedere nome cognome e colore all'utente tramite pront
5- generare una psw con i dati presi + 21
6- stampare tutto in html
*/

// consol log
//! per verificare se il foglio js è connesso
console.log("js ok")
//! ********
var firstName = prompt("Quale è il tuo nome ?");
var lastName = prompt("Quale è il tuo cognome ?");
var favColor = prompt("Quale è il tuo colore preferito ?");

console.log("firstName", firstName);
console.log("lastName", lastName);
console.log("FavColor", favColor);

var password = firstName + lastName + favColor + "21"
console.log("password", password);

var inFirstName = document.getElementById("name");
inFirstName.innerHTML = firstName;

var inLastName = document.getElementById("surname");
inLastName.innerHTML = lastName;

var inFavColor = document.getElementById("color");
inFavColor.innerHTML = favColor;

var inPsw = document.getElementById("psw");
inPsw.innerHTML = password;






