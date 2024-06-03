/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [6, 4, 2]


]
//Each array will contain three indices of the board that make a winner if they hold the same player value ('X' or 'O').

/*---------------------------- Variables (state) ----------------------------*/
let board = [
    '', '', '', 
    '', '', '', 
    '', '', '',];

let turn = 'X';
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#reset');

// console.log(squareEls) - Displays every square 1-9
/*-------------------------------- Functions --------------------------------*/
function init () {
    let board = [
        '', '', '', 
        '', '', '', 
        '', '', '',];
    
    let turn = 'X';
    let winner = false;
    let tie = false;
render()
}

init()

function render() {
    updateBoard()
    updateMessage()
}


function updateBoard() {
    board.forEach((sqr, idx) => {
        if (sqr === 'X'){
            squareEls[idx].style.backgroundColor = 'red'
        } 
        else if (sqr === 'O') {
            squareEls[idx].style.backgroundColor = 'blue'
            } else {
                squareEls[idx].style.backgroundColor = 'white'
            }
    })
}

function updateMessage () {
    if (winner && tie == false) {
        render(`It's Player ${turn}'s turn`)
        } if (winner === false && tie === true) {
            render("It's a tie!");
        }
}

function handleClick(event) {
    const sqrIdx = event.target.id
    placePiece(sqrIdx)
    console.log(board)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
}

function placePiece(idx) {
    if (!board[idx]) {
        board[idx] = turn
    }
}

function checkForWinner() {
    if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) {
            winner = true
    } else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
            winner = true
    } else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
        winner = true
    }else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
        winner = true
    }else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
        winner = true
    }else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
        winner = true
    }else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
        winner = true
    }else if (board[6] !== '' && board[6] === board[4] && board[6] === board[2]) {
        winner = true
    }
    }

// Reference
// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],

// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],

// [0, 4, 8],
// [6, 4, 2]

function checkForTie() {
    if (winner) {
        return
    } else if (board.includes('')) {
        tie = true;
    }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

function switchPlayerTurn() {
    if (winner) {
        return
    } else if (winner === false && turn === 'X') {
        turn = 'O'
    } else if (winner === false && turn === 'O') {
        turn = 'X'
    }
}

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(sqr => {
    sqr.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', init)