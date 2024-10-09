

















//Selection Screen where players pick sides and input their name
(function(){
 
  const xOptionIcon = document.getElementById('xOptionIcon');
  const oOptionIcon = document.getElementById('oOptionIcon');
  const sideSelectionScreen = document.getElementById('sideSelectionScreen');
  const boardScreen = document.getElementById('boardScreen');
  const resetButton = document.getElementById('resetButton');

    //Hover effects for player names 
    function addPlayerNameHovers(){
      const firstPlayerName = document.getElementById('firstPlayerName');
      const secondPlayerName = document.getElementById('secondPlayerName');
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
      const firstPlayerName = document.getElementById('firstPlayerName');
      const secondPlayerName = document.getElementById('secondPlayerName');
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

      const player1 = createPlayer(firstPlayerName.textContent, 'X');
      const player2 = createPlayer(secondPlayerName.textContent, 'O');

   
      console.log(player1);
      console.log(player2);

    }

    xOptionIcon.addEventListener('click', () => handleSideSelection(xOptionIcon));
    oOptionIcon.addEventListener('click', () => handleSideSelection(oOptionIcon));

    // Reset Game
    function resetGame() {
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

       // Reset player names and objects
       const firstPlayerName = document.getElementById("firstPlayerName");
       const secondPlayerName = document.getElementById("secondPlayerName");
       firstPlayerName.textContent = 'Player 1 Name';
       secondPlayerName.textContent = 'Player 2 Name';
       const player1 = createPlayer(firstPlayerName.textContent, 'X');
       const player2 = createPlayer(secondPlayerName.textContent, 'O');
       console.log(player1);
       console.log(player2);
       addPlayerNameHovers();
       addSideSelectionHovers();
    }


  
    resetButton.addEventListener('click', () => console.log(resetGame()));
  

})();




/*
  



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