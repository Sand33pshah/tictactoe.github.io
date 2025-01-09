function playerMode(){
    const mode = document.getElementById('multiplayer').value;
    const playerTwo = document.getElementById('playerTwo');
    const playerOne = document.getElementById('playerOne');

    if(mode === 'computer'){
        playerTwo.style.display = 'none';
        playerOne.placeholder = 'Enter name';
    }
    else{
        playerTwo.style.display = 'block';
        playerOne.placeholder = 'Player 1';
    }
    console.log(mode);
}

function startNow() {
    document.getElementsByClassName('welcome')[0].style.display = 'none';
    document.getElementsByClassName('gameFloor')[0].style.display = 'block';
    console.log('Game On');
}

let currentPlayer = 'X'; 
function makeMove(cell) { 
    if (cell.innerHTML === '') { 
        cell.innerHTML = currentPlayer; 
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
    } 
}

function goBack() {
    document.getElementsByClassName('welcome')[0].style.display = 'flex';
    document.getElementsByClassName('gameFloor')[0].style.display = 'none';
    console.log('Game On');
}

// function reset() {
//     const allCell = document.getElementsByClassName('cell');
//     for(const cell of allCell) {
//         cell.innerHTML = '';
//     }
// }


