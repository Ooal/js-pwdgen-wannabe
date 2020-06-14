var nome = prompt("Inserisci il tuo nome qui");

var cognome = prompt("Inserisci il tuo cognome qui");

var colore = prompt("Inserisci il tuo colore preferito qui");

var password = nome + cognome + colore + "19";

document.getElementById('password').innerHTML = password;
