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

    //* Calcoliamo il numero di celle, righe e colonne in base al livello di difficoltà scelto

    let numCells, numRows, numCols;
    if (difficultyLevel === 1) {
        numCells = 100;
        numRows = 10;
        numCols = 10;
    } else if (difficultyLevel === 2) {
        numCells = 81;
        numRows = 9;
        numCols = 9;
    } else if (difficultyLevel === 3) {
        numCells = 49;
        numRows = 7;
        numCols = 7;
    }

})
  

