/*

game selection stage (where pick sides and input their name this data has to be given to the players object? maybe in the game flow )

once that is done IIFE calls out the gameboard UI.

Players


I need Gameboard

Flow of game
(initialize the game)
(make moves each time check winning conditions)
(show result)
(restart game)



*/


// Set initial event listeners on Side Selection Screen
(function(){
    const xOptionIcon = document.getElementById('xOptionIcon');
    const firstPlayerName = document.getElementById('firstPlayerName');
    const oOptionIcon = document.getElementById('oOptionIcon');
    const secondPlayerName = document.getElementById('secondPlayerName');
    const sideSelectionScreen = document.getElementById('sideSelectionScreen');
    const boardScreen = document.getElementById('boardScreen');

    // Hover effects for X player name
    xOptionIcon.addEventListener('mouseover', () => {
        firstPlayerName.style.color = 'black';
    });

    xOptionIcon.addEventListener('mouseout', () => {
        firstPlayerName.style.color = "#636363";
    });

    // Hover effects for O player name
    oOptionIcon.addEventListener('mouseover', () => {
        secondPlayerName.style.color = 'black';
    });

    oOptionIcon.addEventListener('mouseout', () => {
        secondPlayerName.style.color = "#636363";
    });


    // Hide the Side Selection Screen and show the Board Screen
    xOptionIcon.addEventListener('click', () => {
        xOptionIcon.classList.add('explode');
        sideSelectionScreen.classList.add('fadeOut');
        setTimeout(() => {
          sideSelectionScreen.style.display = "none";
        }, 1000);
        boardScreen.classList.add('fadeIn')
        setTimeout(() => {
          boardScreen.style.display = "flex";
        }, 1001);
        //initializeGame('X', 'O');
      });
  
    oOptionIcon.addEventListener('click', () => {
        oOptionIcon.classList.add('explode');
        sideSelectionScreen.classList.add('fadeOut');
        setTimeout(() => {
          sideSelectionScreen.style.display = "none";
        }, 1000);
        boardScreen.classList.add('fadeIn')
        setTimeout(() => {
          boardScreen.style.display = "flex";
        }, 1001);
        //initializeGame('O', 'X');
      });
})();




/*
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
  
}

*/