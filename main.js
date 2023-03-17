/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/



//* Otteniamo gli elementi HTML che useremo

const generateGridButton = document.getElementById("generate-grid-button");
const difficultySelect = document.getElementById("difficulty-select");
const gridContainer = document.getElementById("grid-container");

//* Aggiungiamo un evento click al bottone "Genera griglia"


generateGridButton.addEventListener("click", function() {

    //* Leggiamo il livello di difficoltà scelto dall'utente

    const difficultyLevel = parseInt(difficultySelect.value);

}
  

