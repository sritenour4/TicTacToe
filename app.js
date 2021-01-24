// variable cells coresponds to all 9 cells of the game
let cells = document.querySelectorAll(".row > div");

let gameActive = true;

// store current game state here in an array of empty strings which will allow easy tracking of played cells and validate the game state later on
let gameState = ["", "", "", "", "", "", "", "", ""];

const winMessage = () => `Win!`;
const drawMessage = () => `Draw!`;

// add event listener for when cell is clicked
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked)
}

let turnCounter = 0;
// event.target represents the cell clicked on
// .textContent tells what the content of the element's text is
function cellClicked(event) {
    if (turnCounter % 2 === 0) {
        event.target.textContent = "X";
    }
    else {
        event.target.textContent = "0";
    }
    ++turnCounter;
    //resultValidation(event);
}

let winConditions = [
    [cells[0].textContent, cells[1].textContent, cells[2].textContent],
    [cells[3].textContent, cells[4].textContent, cells[5].textContent],
    [cells[6].textContent, cells[7].textContent, cells[8].textContent],
    [cells[0].textContent, cells[3].textContent, cells[6].textContent],
    [cells[1].textContent, cells[4].textContent, cells[7].textContent],
    [cells[2].textContent, cells[5].textContent, cells[8].textContent],
    [cells[0].textContent, cells[4].textContent, cells[8].textContent],
    [cells[2].textContent, cells[4].textContent, cells[6].textContent],
];

function resultValidation() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        let win = winConditions[i];
        let a = gameState[win[0]];
        let b = gameState[win[1]];
        let c = gameState[win[2]];
        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winMessage();
        gameActive = false;
        return;
    }
    // check whether there are any values in our game state array that are still not populated
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }   

}

function resetBoard() {
    gameActive = true;    
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
}

document.querySelector(".game_restart").addEventListener("click", resetBoard);









// hint: cells[0].textContent will tell what text is in that cell (find out win or draw)
// toggle player - if currently X, draw an O or if it's currently O, draw an X

// if else statement are your friend
// cells[2].textContent
 // assign it X, when a cell is clicked an X appears


