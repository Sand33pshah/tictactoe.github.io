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
        if(checkWinner()){
            setTimeout(() => {
                alert(currentPlayer + ' wins !');
            }, 200);
        } else{
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('currPlayer').innerHTML = 'Current Player: ' + currentPlayer;
        } 
    } 
}

function checkWinner(){
    const allCell = document.getElementsByClassName('cell');
    const winningCombination = [
        [0,1,2], [3,4,5], [6,7,8], //Rows
        [0,3,6], [1,4,7], [2,5,8], //Columns
        [0,4,8], [2,4,6]           //Diagonals
    ];

    for(const combination of winningCombination){
        const[a,b,c] = combination;
        if(allCell[a].innerHTML === 'X' && allCell[b].innerHTML === 'X' && allCell[c].innerHTML === 'X') {
            allCell[a].style.color = '#03C03C';
            allCell[b].style.color = '#03C03C';
            allCell[c].style.color = '#03C03C';
            allCell[a].style.boxShadow = '2px 2px 12px #03C03C';
            allCell[b].style.boxShadow = '2px 2px 12px #03C03C';
            allCell[c].style.boxShadow = '2px 2px 12px #03C03C';
            return true;
        }else if(allCell[a].innerHTML === 'O' && allCell[b].innerHTML === 'O' && allCell[c].innerHTML === 'O'){
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
    console.log('Game On');
}

function reset() {
    const allCell = document.getElementsByClassName('cell');
    for(const cell of allCell) {
        cell.innerHTML = '';
        cell.style.color = '';
        cell.style.boxShadow = '';
    }

    currentPlayer = 'X';
    // document.getElementById('currPlayer').innerHTML = 'Current Player: ' + currentPlayer;
    console.log('Game Reset');
}


