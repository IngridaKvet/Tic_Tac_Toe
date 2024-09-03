//Animations for Side Selection
let game;
const xOption = document.getElementById('xOption');
const playerOrderFirst = document.getElementById('playerOrderFirst');
const oOption = document.getElementById('oOption');
const playerOrderSecond = document.getElementById('playerOrderSecond');
const sideSelection = document.getElementById('sideSelection');
const boardSection = document.getElementById('boardSection');

xOption.addEventListener('click', () => {
    xOption.classList.add('explode');
    sideSelection.classList.add('fadeOut');
    setTimeout(() => {
      sideSelection.style.display = "none";
  }, 1000);
  setTimeout(() => {
    boardSection.style.display = "flex";
}, 1001);
    initializeGame('X', 'O'); 
    
});

oOption.addEventListener('click', () => {
    oOption.classList.add('explode');
    sideSelection.classList.add('fadeOut');
    initializeGame('O', 'X'); 
});

xOption.addEventListener('mouseover', () => {
    playerOrderFirst.style.color = 'black';
});

xOption.addEventListener('mouseout', () => {
    playerOrderFirst.style.color = "#636363"; 
});

oOption.addEventListener('mouseover', () => {
    playerOrderSecond.style.color = 'black';
});

oOption.addEventListener('mouseout', () => {
    playerOrderSecond.style.color = "#636363";
});

function initializeGame(playerOneToken, playerTwoToken) {
  game = GameController("Player One", "Player Two", playerOneToken, playerTwoToken);
  


game.playRound(2,0);
game.playRound(1,0);
game.playRound(2,2);
console.log(game.getActivePlayer());




}


//Game Logic
function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];
  
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }
  
  const getBoard = () => board;

  const dropSign = (row, column, player) => {
    board[column][row].addSign(player);
  };

  const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getSign()))
    console.log(boardWithCellValues);
  };
  return { getBoard, dropSign, printBoard};
}
  
function Cell() {
  let value = 0;

  const addSign = (player) => {
    value = player;
  };
  
  const getSign = () => value;
  return {
    addSign,
    getSign
  };
}
  
function GameController(playerOneName, playerTwoName, playerOneToken, playerTwoToken) {
  const board = Gameboard();
  
  const players = [
    {
      name: playerOneName,
      token: playerOneToken
    },
    {
      name: playerTwoName,
      token: playerTwoToken
    }
  ];
  
  let activePlayer = players[0];
  
  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;
  
  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);  
  };

  const playRound = (column, row) => {

  console.log(`Dropping ${getActivePlayer().name}'s sign into column ${column}, row ${row}.`);

  const currentSign = board.getBoard()[column][row].getSign();
  console.log(currentSign)
      
  if (currentSign === 0) {
    board.dropSign(column, row, getActivePlayer().token);
    switchPlayerTurn();  
  } else {
      console.log("This cell is already taken! Choose another one.");
    }
      printNewRound();
    };
  
    printNewRound();

    return {
      playRound,
      getActivePlayer
    };
  }
  

