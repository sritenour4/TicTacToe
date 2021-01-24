// variable cells coresponds to all 9 cells of the game
let cells = document.querySelectorAll(".row > div");

let gameActive = true;
const statusDisplay = document.getElementById("status-display");

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
    turnCounter++;
    resultValidation();
}

// Array of winning conditions
let winConditions = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
];

function resultValidation() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        let win = winConditions[i];
        let a = win[0].textContent;
        let b = win[1].textContent;
        let c = win[2].textContent;
        
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
    //check whether there are any values in our game state array that are still not populated
    else if (turnCounter === 9) {        
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
}

function resetBoard() {
    gameActive = true;
    turnCounter = 0;
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
        statusDisplay.innerHTML = "";
    }    
}

document.querySelector(".game_restart").addEventListener("click", resetBoard);




