// Un alert espone 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

alert("Benvenuto! Riuscirai a ricordare tutti i numeri?");

function randomNumber (max, min) {
  var random = Math.floor(Math.random() * max) + min;
  return random;
}

function check (array, numero) {
  if (numero.includes(array)) {
    return true;
  } else {
    return false;
  }
}

function remember () {
  document.getElementById("numeri_random").innerHTML = "";
}
setInterval(remember, 3000);

var numeroComputer = [];
do {
  var numeroCasuale = randomNumber(100, 1);
  check(numeroCasuale, numeroComputer);
  if (check(numeroCasuale, numeroComputer) == false) {
    numeroComputer.push(numeroCasuale);
  }
} while (numeroComputer.length < 5);
document.getElementById("numeri_random").innerHTML = numeroComputer;
console.log(numeroComputer);


function inserimento () {
  var conteggio = 0;
  var i = 0;
  var numeriIndov = [];
  do {
    var inputUtente  = parseInt(prompt("Inserisci i numeri che hai visto, uno alla volta"));
    check(inputUtente, numeriIndov);
    if ((inputUtente < 1) || (inputUtente > 100)) {
      alert("Inserire un numero da 1 a 100!");
    } else if (isNaN(inputUtente)) {
      alert("Inserire un numero!");
    }else if (check(inputUtente, numeriIndov) == false && check(inputUtente, numeroComputer) ==  true) {
      numeriIndov.push(inputUtente);
      conteggio++;
    } else if (check(inputUtente, numeriIndov) ==  true) {
      alert("Hai già inserito questo numero!");
    }
    i++;
  } while (i < 5);

  alert("Hai indovinato " + conteggio + " numeri!" + "\n" + "I numeri che hai indovinato sono: " + numeriIndov);
}
setTimeout(inserimento, 5000);
