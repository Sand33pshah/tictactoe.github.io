let currentPlayer = 'X';
let playerOneName = 'X';
let PlayerTwoName = 'O';
let isComputerOpponent = false;


function playerMode() {
    const mode = document.getElementById('multiplayer').value;
    const playerTwo = document.getElementById('playerTwo');
    const playerOne = document.getElementById('playerOne');

    if (mode === 'computer') {
        playerTwo.style.display = 'none';
        playerOne.placeholder = 'Enter name';
        isComputerOpponent = true;
    }
    else {
        playerTwo.style.display = 'block';
        playerOne.placeholder = 'Player 1';
        isComputerOpponent = false;
    }
}

function startNow() {
    const playerOneInput = document.getElementById('playerOne').value;
    const playerTwoInput = document.getElementById('playerTwo').value;

    playerOneName = playerOneInput ? playerOneInput : 'X';
    PlayerTwoName = playerTwoInput ? playerTwoInput : 'O';

    //added by me
    if (isComputerOpponent) {
        PlayerTwoName = 'Computer';
    }

    document.getElementById('currPlayer').innerHTML = 'Current Player: ' + playerOneName;

    document.getElementsByClassName('welcome')[0].style.display = 'none';
    document.getElementsByClassName('gameFloor')[0].style.display = 'block';
    reset();
}

function makeMove(cell) {
    if (cell.innerHTML === '') {
        cell.innerHTML = currentPlayer;
        if (checkWinner()) {
            setTimeout(() => {
                alert((currentPlayer === 'X' ? playerOneName : PlayerTwoName) + ' wins !');
            }, 200);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('currPlayer').innerHTML = 'Current Player: ' + (currentPlayer === 'X' ? playerOneName : PlayerTwoName);
            if (isComputerOpponent && currentPlayer === 'O') {
                setTimeout(computerMove, 500);
            }
        }
    }
}

function computerMove() {
    const allCells = document.getElementsByClassName('cell');
    const emptyCells = [];
    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].innerHTML === '') {
            emptyCells.push(allCells[i]);
        }
    }
    // console.log(Math.floor(Math.random() * emptyCells.length));
    if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        randomCell.innerHTML = 'O';
        if (checkWinner()) {
            setTimeout(() => {
                alert(PlayerTwoName + ' wins !');
            }, 200);
        } else {
            currentPlayer = 'X';
            document.getElementById('currPlayer').innerHTML = 'Current Player: ' + playerOneName;
        }
    }
    console.log(randomCell);
}




function checkWinner() {
    const allCell = document.getElementsByClassName('cell');
    const winningCombination = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //Columns
        [0, 4, 8], [2, 4, 6]           //Diagonals
    ];

    for (const combination of winningCombination) {
        const [a, b, c] = combination;
        if (allCell[a].innerHTML === 'X' && allCell[b].innerHTML === 'X' && allCell[c].innerHTML === 'X') {
            allCell[a].style.color = '#03C03C';
            allCell[b].style.color = '#03C03C';
            allCell[c].style.color = '#03C03C';
            allCell[a].style.boxShadow = '2px 2px 12px #03C03C';
            allCell[b].style.boxShadow = '2px 2px 12px #03C03C';
            allCell[c].style.boxShadow = '2px 2px 12px #03C03C';
            return true;
        } else if (allCell[a].innerHTML === 'O' && allCell[b].innerHTML === 'O' && allCell[c].innerHTML === 'O') {
            allCell[a].style.color = '#03C03C';
            allCell[b].style.color = '#03C03C';
            allCell[c].style.color = '#03C03C';
            allCell[a].style.boxShadow = '2px 2px 12px #03C03C';
            allCell[b].style.boxShadow = '2px 2px 12px #03C03C';
            allCell[c].style.boxShadow = '2px 2px 12px #03C03C';
            return true;
        }
    }

    return false;
}




function goBack() {
    document.getElementsByClassName('welcome')[0].style.display = 'flex';
    document.getElementsByClassName('gameFloor')[0].style.display = 'none';
}

function reset() {
    const allCell = document.getElementsByClassName('cell');
    for (const cell of allCell) {
        cell.innerHTML = '';
        cell.style.color = '';
        cell.style.boxShadow = '';
    }

    currentPlayer = 'X';
    document.getElementById('currPlayer').innerHTML = 'Current Player: ' + (currentPlayer === 'X' ? playerOneName : PlayerTwoName);
}


