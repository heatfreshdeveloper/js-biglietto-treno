const kilometri = prompt("Quanti chilometri desidera percorrere?")
const eta = prompt("Quanti anni ha il passeggero?")

const prezzoParziale = kilometri * 0.21

if (eta >= 18 && eta < 65) {
    let prezzoTotale = prezzoParziale
    alert("Il prezzo del suo viaggio è: " + prezzoTotale + "€")
} else if (eta < 18) {
    let scontoMinori = prezzoParziale * 20 / 100
    let prezzoTotale = prezzoParziale - scontoMinori
    let pT = prezzoTotale.toFixed(2);
    alert("Il prezzo del suo viaggio è: " + pT + "€")
} else if (eta > 65) {
    let scontoVecchi = prezzoParziale * 40 / 100
    let prezzoTotale = prezzoParziale - scontoVecchi
    let pT = prezzoTotale.toFixed(2);
    alert("Il prezzo del suo viaggio è: " + pT + "€")
} else {
    alert("Nessun risultato disponibile!")
}

