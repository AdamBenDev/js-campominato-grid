/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

//*Seleziono il contenitore della griglia

const gridContainer = document.getElementById("grid")


//*Creo una matrice 10x10 con numeri progressivi 

const gridValues = [];
let counter = 1;
for (let index = 0; index < 10; index++) {
    const row = [];
    for (let j=0; j < 10; j++) {
        row.push(counter++);
    }
    gridValues.push(row)
    
}

//*creo gli elementi in html per la griglia

const gridElements = [];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}