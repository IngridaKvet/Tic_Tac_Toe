// Player Object Factory
const Player = (name, sign) => {
    return {
      name,
      sign,
      score: 0,
      incrementScore(){
        this.score += 1;
      },
      setName(newName){
        this.name = newName;
      }
    };
};

// Board Object Factory
const Board = () => {
    let boardState = Array(9).fill(null);

    // Update the board at a given index
    function updateBoard(index, sign) {
      if (!boardState[index]) {
        boardState[index] = sign;  // Update console board
        document.querySelector(`#cell${index + 1}`).textContent = sign; // Update UI board
        return true; 
      }
        return false; 
    }

    // Check if there's a winning combination using indexes
    const winningCombinations = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // First column
      [1, 4, 7], // Second column
      [2, 5, 8], // Third column
      [0, 4, 8], // Diagonal from top-left to bottom-right
      [2, 4, 6]  // Diagonal from top-right to bottom-left
    ];
    
    function checkWin() {
      for (const combo of winningCombinations) {
          const [a, b, c] = combo;
          if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            console.log(boardState[a])
              return boardState[a]; // Returns 'X' or 'O' as the winner
          }
      }
      return null; // No winner
    }

    // Check for a tie
    function isBoardFull() {
      if(boardState.every(cell => cell !== null)){
        return true
      } else{
        return false
      }
    }

    // Reset the board
    function resetBoard() {
        boardState = Array(9).fill(null); 
        document.querySelectorAll('.boardCell').forEach(cell => cell.textContent = ''); 
        document.querySelectorAll('.boardCell').forEach(cell => cell.style.backgroundColor = "#EBF6FF"); 
        document.querySelectorAll('.boardCell').forEach(cell => cell.style.pointerEvents = 'auto'); 
        readdPartialBorders();
    }

    // Change cell color when div is pressed
    function changeCellBgColor(cell, currentPlayer, player1, player2){
      cell.style.backgroundColor = currentPlayer === player1 ? '#ED9EB7' : '#A8FBC4';
    }

    // Disable
    function disableCell(cell){
      cell.style.pointerEvents = 'none';
    }

    // Readd partial borders
    function readdPartialBorders(){
      const cell1 = document.getElementById('cell1');
      const border1 = document.createElement('div');
      const border2 = document.createElement('div');
      border1.classList.add('partialBorderHorizontalLeftUp');
      border1.id = 'border1';
      border2.classList.add('partialBorderVerticalTopLeft');
      border2.id = 'border2';
      cell1.appendChild(border1);
      cell1.appendChild(border2);
      const cell2 = document.getElementById('cell2');
      const border3 = document.createElement('div');
      const border4 = document.createElement('div');
      const border5 = document.createElement('div');
      border3.classList.add('partialBorderVerticalTopLeft');
      border3.id = 'border3';
      border4.classList.add('partialBorderVerticalTopRight');
      border4.id = 'border4';
      border5.classList.add('partialBorderTop');
      border5.id = 'border5';
      cell2.appendChild(border3);
      cell2.appendChild(border4);
      cell2.appendChild(border5);
      const cell3 = document.getElementById('cell3');
      const border6 = document.createElement('div');
      const border7 = document.createElement('div');
      border6.classList.add('partialBorderHorizontalRightUp');
      border6.id = 'border6';
      border7.classList.add('partialBorderVerticalTopRight');
      border7.id = 'border7';
      cell3.appendChild(border6);
      cell3.appendChild(border7);
      const cell4 = document.getElementById('cell4');
      const border8 = document.createElement('div');
      const border9 = document.createElement('div');
      const border10 = document.createElement('div');
      border8.classList.add('partialBorderHorizontalLeftUp');
      border8.id = 'border8';
      border9.classList.add('partialBorderHorizontalLeftDown');
      border9.id = 'border9';
      border10.classList.add('partialBorderLeft');
      border10.id = 'border10';
      cell4.appendChild(border8);
      cell4.appendChild(border9);
      cell4.appendChild(border10);
      const cell6 = document.getElementById('cell6');
      const border11 = document.createElement('div');
      const border12 = document.createElement('div');
      const border13 = document.createElement('div');
      border11.classList.add('partialBorderHorizontalRightUp');
      border11.id = 'border11';
      border12.classList.add('partialBorderHorizontalRightDown');
      border12.id = 'border12';
      border13.classList.add('partialBorderRight');
      border13.id = 'border13';
      cell6.appendChild(border11);
      cell6.appendChild(border12);
      cell6.appendChild(border13);
      const cell7 = document.getElementById('cell7');
      const border14 = document.createElement('div');
      const border15 = document.createElement('div');
      border14.classList.add('partialBorderVerticalBottomLeft');
      border14.id = 'border14';
      border15.classList.add('partialBorderHorizontalLeftDown');
      border15.id = 'border15';
      cell7.appendChild(border14);
      cell7.appendChild(border15);
      const cell8 = document.getElementById('cell8');
      const border16 = document.createElement('div');
      const border17 = document.createElement('div');
      const border18 = document.createElement('div');
      border16.classList.add('partialBorderVerticalBottomRight');
      border16.id = 'border16';
      border17.classList.add('partialBorderVerticalBottomLeft');
      border17.id = 'border17';
      border18.classList.add('partialBorderBottom');
      border18.id = 'border18';
      cell8.appendChild(border16);
      cell8.appendChild(border17);
      cell8.appendChild(border18);
      const cell9 = document.getElementById('cell9');
      const border19 = document.createElement('div');
      const border20 = document.createElement('div');
      border19.classList.add('partialBorderHorizontalRightDown');
      border19.id = 'border19';
      border20.classList.add('partialBorderVerticalBottomRight');
      border20.id = 'border20';
      cell9.appendChild(border19);
      cell9.appendChild(border20);
    }
    
    return {
        updateBoard,
        readdPartialBorders,
        isBoardFull,
        resetBoard,
        changeCellBgColor,
        disableCell,
        checkWin
    };
};

// Game Object Factory wrapped in IIFE
const Game = (() => {
    // Create default players
    let player1 = Player(firstPlayerName.textContent, 'X', 0);
    let player2 = Player(secondPlayerName.textContent, 'O', 0);
    let currentPlayer = player1;
    const board = Board();
    
    // IIFE to initialize game 
    (function init(){
          const firstPlayerName = document.getElementById('firstPlayerName');
          const secondPlayerName = document.getElementById('secondPlayerName');
          updateScore();

          //Hover effects for player names 
          function addPlayerNameHovers(){
            firstPlayerName.addEventListener('mouseover', () => {
              firstPlayerName.style.color = '#EF476F';
            });
        
            firstPlayerName.addEventListener('mouseout', () => {
              firstPlayerName.style.color = '#636363';
            });
        
            secondPlayerName.addEventListener('mouseover', () => {
              secondPlayerName.style.color = '#66FF89';
            });
        
            secondPlayerName.addEventListener('mouseout', () => {
              secondPlayerName.style.color = '#636363';
            });
          }
          addPlayerNameHovers();
      
          // Side Selection Hovers
          function addSideSelectionHovers(){
            xOptionIcon.addEventListener('mouseover', () => {
              firstPlayerName.style.color = 'black';
            });
      
            xOptionIcon.addEventListener('mouseout', () => {
              firstPlayerName.style.color = "#636363";
            });
      
            oOptionIcon.addEventListener('mouseover', () => {
              secondPlayerName.style.color = 'black';
            });
      
            oOptionIcon.addEventListener('mouseout', () => {
              secondPlayerName.style.color = "#636363";
            });
          }
          addSideSelectionHovers();
      
          // Input Fields for name
          function handleClickOnText(event){
            const currentElement = event.target;
            const currentElementId = currentElement.id;
            const currentText = currentElement.textContent
            const inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.value = currentText;
            currentElement.parentNode.replaceChild(inputElement,currentElement);
            inputElement.focus();
            
            inputElement.addEventListener('blur', () =>{
              const updatedText = inputElement.value;
              const newPlayerName = document.createElement('h3');
              newPlayerName.textContent = updatedText;
              newPlayerName.setAttribute('class','playerName')
              newPlayerName.setAttribute('id', currentElementId)
              inputElement.parentNode.replaceChild(newPlayerName, inputElement)
              newPlayerName.addEventListener('click', handleClickOnText); //Reapply
              addPlayerNameHovers();
              addSideSelectionHovers();

              // Update the player name based on which player was clicked
              if (currentElementId === 'firstPlayerName') {
                player1.setName(updatedText); 
              } else if (currentElementId === 'secondPlayerName') {
                player2.setName(updatedText); 
              }

              // Update the display for the turn indicator
              updatePlayerTurn();
              })

            inputElement.addEventListener('keypress', function(event){
              if(event.key == 'Enter'){
                inputElement.blur();
              }
            })
          }
          firstPlayerName.addEventListener('click', handleClickOnText)
          secondPlayerName.addEventListener('click', handleClickOnText)
      
          //Hide side selection page and show board
          function handleSideSelection(selectedIcon) {
            selectedIcon.classList.add('explode');
            sideSelectionScreen.classList.remove('fadeIn');
            sideSelectionScreen.classList.add('fadeOut');
      
            setTimeout(() => {
                sideSelectionScreen.style.display = "none";
            }, 1000);
            boardScreen.classList.add('fadeIn');
            setTimeout(() => {
                boardScreen.style.display = "flex";
            }, 1001);
      
            const firstPlayerName = document.getElementById("firstPlayerName");
            const secondPlayerName = document.getElementById("secondPlayerName");
            const player1 = Player(firstPlayerName.textContent, 'X');
            const player2 = Player(secondPlayerName.textContent, 'O');
            document.getElementById("firstPlayerNameBoard").innerHTML = player1.name;
            document.getElementById("secondPlayerNameBoard").innerHTML = player2.name;
            updatePlayerTurn();
          }
      
          xOptionIcon.addEventListener('click', () => handleSideSelection(xOptionIcon));
          oOptionIcon.addEventListener('click', () => handleSideSelection(oOptionIcon));
      
          //Reset Game
          function resetGame() {
            //Reset UI
            const sideSelection = document.getElementById('sideSelectionScreen');
            const boardSection = document.getElementById('boardScreen');
            const xOption = document.getElementById('xOptionIcon');
            const oOption = document.getElementById('oOptionIcon');
            oOption.classList.remove('explode');
            xOption.classList.remove('explode');
            sideSelection.classList.remove('fadeOut');
            sideSelection.classList.add('fadeIn')
            setTimeout(() => {
              sideSelection.style.display = "flex";
            }, 100);
            boardSection.style.display = "none";
            boardSection.classList.remove('fadeIn');
      
             //Reset player objects
             const firstPlayerName = document.getElementById("firstPlayerName");
             const secondPlayerName = document.getElementById("secondPlayerName");
             firstPlayerName.textContent = 'Player 1';
             secondPlayerName.textContent = 'Player 2';
             player1 = Player(firstPlayerName.textContent, 'X', 0);
             player2 = Player(secondPlayerName.textContent, 'O', 0);
             console.log(player1);
             console.log(player2);
             addPlayerNameHovers();
             addSideSelectionHovers();
             currentPlayer = player1; 
             updateScore();
             hidePlayAgainBtn();
             board.resetBoard(); 
          }
          resetButton.addEventListener('click', () => resetGame());
    })();

    //Update score text
    function updateScore(){
      document.getElementById('xPlayerScore').textContent = `${player1.score}`;
      document.getElementById('oPlayerScore').textContent = `${player2.score}`;
    }

    //Update player turn text
    function updatePlayerTurn() {
      document.getElementById('playerTurn').textContent = `It's ${currentPlayer.name}'s turn`;
    }

    //Change player turn text to show who won
    function showWhoWOn(){ 
      switchPlayer();
      document.getElementById('playerTurn').textContent = `${currentPlayer.name} won!`;
    }

    //Show play again button
    function showPlayAgainBtn(){
      const playAgainBtn = document.getElementById("playAgainButton");
      playAgainBtn.style.marginTop = "15px";
      playAgainBtn.textContent = `Play Again`;
      playAgainBtn.addEventListener('click', () => {
        board.resetBoard();
        currentPlayer = player1;
        updatePlayerTurn();
        hidePlayAgainBtn();
      });
    }

    //Hide play again button
    function hidePlayAgainBtn(){
      document.getElementById("playAgainButton").textContent = ``;
      document.getElementById("playAgainButton").style.marginTop = "0";

    }

    // Switch player turn
    function switchPlayer() {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      console.log(currentPlayer)
      updatePlayerTurn();
    }

    function makeMove(index) {
      if (board.updateBoard(index, currentPlayer.sign)) { 
        const cell = document.querySelector(`#cell${index + 1}`);
        board.readdPartialBorders();
        board.changeCellBgColor(cell, currentPlayer, player1, player2);
        board.disableCell(cell);
        switchPlayer();

        //Tie case
        if(board.isBoardFull() == true){
          document.getElementById('playerTurn').textContent = `It's a Tie!`;
          showPlayAgainBtn();
        }

        //Win case
        let winningSide = board.checkWin();
        if(winningSide == "X"){
          player1.incrementScore();
          document.querySelectorAll('.boardCell').forEach(cell => cell.style.pointerEvents = 'none'); 
          updateScore();
          showWhoWOn();
          showPlayAgainBtn();
        }
        if(winningSide == "O"){
          player2.incrementScore();
          document.querySelectorAll('.boardCell').forEach(cell => cell.style.pointerEvents = 'none'); 
          updateScore();
          showWhoWOn();
          showPlayAgainBtn();
        }
      }
    }

    return {
      makeMove
    };
})();

//Event listener for any cell is pressed
document.querySelectorAll('.boardCell').forEach((cell, index) => {
  cell.addEventListener('click', () => Game.makeMove(index));

});
  



  