

// IIFE to initialize game
(function() {
  // Factory function to create event handlers and setup
  function setupGame(options) {
    const { xOption, oOption, playerOrderFirst, playerOrderSecond, sideSelection, boardSection } = options;
    
    // Attach event listeners for X option
    xOption.addEventListener('click', () => {
      xOption.classList.add('explode');
      sideSelection.classList.add('fadeOut');
      setTimeout(() => {
        sideSelection.style.display = "none";
      }, 1000);
      boardSection.classList.add('fadeIn')
      setTimeout(() => {
        boardSection.style.display = "flex";
      }, 1001);
      initializeGame('X', 'O');
    });

    // Attach event listeners for O option
    oOption.addEventListener('click', () => {
      oOption.classList.add('explode');
      sideSelection.classList.add('fadeOut');
      setTimeout(() => {
        sideSelection.style.display = "none";
      }, 1000);
      boardSection.classList.add('fadeIn')
      setTimeout(() => {
        boardSection.style.display = "flex";
      }, 1001);
      initializeGame('O', 'X');
    });

    // Hover effects for X option
    xOption.addEventListener('mouseover', () => {
      playerOrderFirst.style.color = 'black';
    });

    xOption.addEventListener('mouseout', () => {
      playerOrderFirst.style.color = "#636363";
    });

    // Hover effects for O option
    oOption.addEventListener('mouseover', () => {
      playerOrderSecond.style.color = 'black';
    });

    oOption.addEventListener('mouseout', () => {
      playerOrderSecond.style.color = "#636363";
    });
  }

  //Util function to reset UI elements to initial state
  function resetGame() {
    const sideSelection = document.getElementById('sideSelection');
    const boardSection = document.getElementById('boardSection');
    const xOption = document.getElementById('xOption');
    const oOption = document.getElementById('oOption');
    oOption.classList.remove('explode');
    xOption.classList.remove('explode');
    sideSelection.classList.remove('fadeOut');
    sideSelection.classList.add('fadeIn')
    setTimeout(() => {
      sideSelection.style.display = "flex";
    }, 250);
    boardSection.style.display = "none";
    boardSection.classList.remove('fadeIn');
  }

  // IIFE to get initial setup DOM elements
  (function() {
    const xOption = document.getElementById('xOption');
    const playerOrderFirst = document.getElementById('playerOrderFirst');
    const oOption = document.getElementById('oOption');
    const playerOrderSecond = document.getElementById('playerOrderSecond');
    const sideSelection = document.getElementById('sideSelection');
    const boardSection = document.getElementById('boardSection');

    // Setup game initially
    setupGame({
      xOption,
      oOption,
      playerOrderFirst,
      playerOrderSecond,
      sideSelection,
      boardSection
    });

    document.getElementById('resetButton').addEventListener('click', () => {
      resetGame();  // Reset the game UI
      setupGame({  // Reinitialize event handlers
        xOption,
        oOption,
        playerOrderFirst,
        playerOrderSecond,
        sideSelection,
        boardSection
      });
    });


  })();
})();
















function initializeGame(playerOneToken, playerTwoToken) {
  game = GameController("Player One", "Player Two", playerOneToken, playerTwoToken);

  const divs = document.querySelectorAll('.boardCell');
  // Initial hover effect for player 1 
  divs.forEach(div => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = '#ED9EB7'; 
    });

    div.addEventListener('mouseout', () => {
      div.style.backgroundColor = '#EBF6FF';
    });
  });



/*

  divs.forEach(div => {
    div.addEventListener('click', () => {
    game.playRound(2,0); // With some values not static  FIX 
    div.style.backgroundColor = '#ED9EB7'; 


    //Hover effects for board cell based on current player
    if(game.getActivePlayer().name == "Player One"){
      console.log("HIII")
      divs.forEach(div => {
        
        div.addEventListener('mouseover', () => {
          div.style.backgroundColor = '#ED9EB7'; 
        });
  
        div.addEventListener('mouseout', () => {
          div.style.backgroundColor = '#EBF6FF';
        });
      });
    } else{
      
      console.log("HOOO")
      divs.forEach(div => {
        
        div.addEventListener('mouseover', () => {
          div.style.backgroundColor = '#A8FBC4'; 
        });
  
        div.addEventListener('mouseout', () => {
          div.style.backgroundColor = '#EBF6FF'; 
        });
        
      });
    }





  }
  )});


/*
      //Hover effects for board cell based on current player
      const divs = document.querySelectorAll('.boardCell');
      if(game.getActivePlayer().name == "Player One"){
    
        console.log("HIII")
        divs.forEach(div => {
          div.addEventListener('mouseover', () => {
            div.style.backgroundColor = '#ED9EB7'; 
          });
    
          div.addEventListener('mouseout', () => {
            div.style.backgroundColor = '#EBF6FF';
          });
        });
      } else{
        
        console.log("HOOO")
        divs.forEach(div => {
          div.addEventListener('mouseover', () => {
            div.style.backgroundColor = '#A8FBC4'; 
          });
    
          div.addEventListener('mouseout', () => {
            div.style.backgroundColor = '#EBF6FF'; 
          });
        });
      }
*/


/*
game.playRound(1,0);
game.playRound(2,1);
game.playRound(1,1);
game.playRound(2,2);
game.playRound(0,0);*/

console.log(game.getActivePlayer());


}




//Game Logic
// Factory function
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


  const updateBoardUI = () => {
    const cells = document.querySelectorAll('.boardCell');
    cells.forEach(cell => {
      const row = cell.dataset.row;
      const column = cell.dataset.column;
      cell.textContent = board[row][column].getSign() || '';
    });
  };


  const setupEventListeners = () => {
    const cells = document.querySelectorAll('.boardCell');
    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        const row = cell.dataset.row;
        const column = cell.dataset.column;
        //const activePlayer = getActivePlayer().token; // Assuming getActivePlayer is available
        dropSign(row, column, 'x');
      });
    });
  };

  setupEventListeners();
  return { getBoard, dropSign, printBoard, updateBoardUI};
}

// Factory function
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

//Factory function
function GameController(playerOneName, playerTwoName, playerOneToken, playerTwoToken) {
  
  const board = Gameboard();
  board.updateBoardUI();


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

  const checkWinner = () => {
    const b = board.getBoard();
    
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (b[i][0].getSign() !== 0 && b[i][0].getSign() === b[i][1].getSign() && b[i][1].getSign() === b[i][2].getSign()) {
        return b[i][0].getSign();
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (b[0][i].getSign() !== 0 && b[0][i].getSign() === b[1][i].getSign() && b[1][i].getSign() === b[2][i].getSign()) {
        return b[0][i].getSign();
      }
    }

    // Check diagonals
    if (b[0][0].getSign() !== 0 && b[0][0].getSign() === b[1][1].getSign() && b[1][1].getSign() === b[2][2].getSign()) {
      return b[0][0].getSign();
    }

    if (b[0][2].getSign() !== 0 && b[0][2].getSign() === b[1][1].getSign() && b[1][1].getSign() === b[2][0].getSign()) {
      return b[0][2].getSign();
    }
    return null;
  };


  const playRound = (column, row) => {




    console.log(`Dropping ${getActivePlayer().name}'s sign into column ${column}, row ${row}.`);

    const currentSign = board.getBoard()[column][row].getSign();
     console.log(currentSign)

    if (currentSign === 0) {
      board.dropSign(column, row, getActivePlayer().token);

      const winner = checkWinner();
      if (winner) {
        console.log(`${winner} wins the game!`);
        // Handle the end of the game, e.g., disable further moves
      } else {
        switchPlayerTurn();
        printNewRound();
      }
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
  

