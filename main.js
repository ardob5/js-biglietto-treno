// Variabili

var euroPerKM = 0.21;

var scontoUnder18 = 0.8;
var scontoOver65 = 0.6;

var scontoBiglietto;

// Chiedere all'utente quanti KM deve percorrere
var kmDaPercorrere = prompt("Inserire il numero di KM da percorrere");

// Chiedere all'utente l'età
var etaUtente = prompt("Inserire l'età");

// Calcolo costo Biglietto
var costoBiglietto = kmDaPercorrere * euroPerKM;

// Calcolo biglietti con eventuali sconti

if (etaUtente < 18) {
  scontoBiglietto = costoBiglietto * scontoUnder18;
} else if (etaUtente > 65) {
  scontoBiglietto = costoBiglietto * scontoOver65;
} else {
  scontoBiglietto = costoBiglietto;
}

// Stampa del risultato

document.getElementById("prezzo-biglietto").innerHTML = "Il prezzo del biglietto è " + scontoBiglietto.toFixed(2) + " euro.";
