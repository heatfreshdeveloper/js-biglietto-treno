const kilometri = prompt("Quanti chilometri desidera percorrere?")
const eta = prompt("Quanti anni ha il passeggero?")

const prezzoParziale = kilometri * 0.21

if (eta >= 18 && eta < 65) {
    let prezzoTotale = prezzoParziale
    alert("Il prezzo del suo viaggio è: " + prezzoTotale)
} else if (eta < 18) {
    let prezzoTotale = prezzoParziale * 20 / 100
    alert("Il prezzo del suo viaggio è: " + prezzoTotale)
} else if (eta > 65) {
    let prezzoTotale = prezzoParziale * 40 / 100
    alert("Il prezzo del suo viaggio è: " + prezzoTotale)
} else {
    alert("Nessun risultato disponibile!")
}

