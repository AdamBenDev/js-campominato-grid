/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/



const generateBtn = document.querySelector('#generate-btn');
const grid = document.querySelector('#grid');
const difficultySelect = document.querySelector('#difficulty-select');

generateBtn.addEventListener('click', () => {
    // Cancella la griglia precedente
    grid.innerHTML = '';

    // Ottieni la difficoltà scelta dall'utente
    const difficulty = parseInt(difficultySelect.value);

    let gridSize;

    switch (difficulty) {
      case 1:
          gridSize = { rows: 10, columns: 10 };
          break;

      case 2:
          gridSize = { rows: 9, columns: 9 };
          break;

      case 3:
          gridSize = { rows: 7, columns:7 };
          break;

      default:
          gridSize = { rows :10 , columns :10};
     }

     // Imposta il numero di colonne della griglia in base alla difficoltà scelta
     grid.style.gridTemplateColumns = `repeat(${gridSize.columns}, auto)`;

     for (let i = 1; i <= gridSize.rows * gridSize.columns; i++) {
         const cell = document.createElement('div');
         cell.classList.add('cell');
         cell.textContent = i;

         cell.addEventListener('click', (event) => {
             event.target.classList.add('selected');
             console.log(`Hai cliccato sulla casella ${i}`);
         });

         grid.appendChild(cell);
     }
});