/* Store the gameboard as an array inside of a Gameboard object
Store the players inside objects too.
Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
If you need multiples of something (players!), create them with factories. */


const gameBoard = (() => {
    // same thing, just easier to type :D
    let board = new Array(9).fill('');
    const formulario = document.querySelector('.formulario');
    const nombre1 = formulario.nombre1;
    const nombre2 = formulario.nombre2;
  
    const setCell = (index, value) => {
      // a function that updates the contents of a given array index
      console.log(board);
      console.log(nombre1);
      console.log(nombre2);
    }
    const resetBoard = () => {
      // a function that resets the board to empty
      board = new Array(9).fill('');
      const divs = document.querySelectorAll('.ticTac');
      divs.forEach((div) => {
        div.remove();
      });
      renderContent();
    }

    // Aquí va el render del tablero
    /* A function that will render the contents of the gameboard array to the webpage */
    const renderContent = () => {
        
        const gameboard = document.querySelector('.gameboard');
        const ladoDiv = 211.33;

        for (let step = 0; step < 9; step++) {
            const div = document.createElement('div');
            const textoArray = board[step];
            console.log(`${textoArray} está en la posición ${step}`);
            // Darle estílos  la cuadrícula acomodar la cuadrícula en el rectángulo
            div.style.border = '1px solid white';
            div.style.width = `${ladoDiv}px`;
            div.style.height = `${ladoDiv}px`;
            div.textContent =`${textoArray}`;
            div.classList.add('ticTac');
            div.setAttribute('id', `${step}`);
            // metemos el div en el container
            gameboard.appendChild(div);
            /* console.log(`Hecho el div número ${step}`);
            // llamar función para pintar divs*/
            /* getBoard(); */
            }
    }

    /* Aquí una función que crea los objectos de jugador con el factory y toma los datos del formulario
    Después activa getBoard con la división de cada turno y la figura que le toca a cada quien */

    const getBoard = (e) => {

      /* e.preventDefault(); */ 
      // a function that returns **a copy** of the board
      const divs = document.querySelectorAll('.ticTac');
      const game = flowOfTheGame(nombre1, nombre2);

      divs.forEach((div) => {
        div.addEventListener('click', function(e) {
            /* Selecciona el ID del div y lo usa en el array como index
            /* console.log(this.id); */
            if(board[`${this.id}`] !== '') {
              console.log('Está ocupado');
            } else {
              board[`${this.id}`] = game.currentPlayer.plays;
              console.log(game.currentPlayer.name);
              console.log(board);
              this.textContent = game.currentPlayer.plays; 
              game.switchPlayers();

            }
        });
    });

    }
    return {
      setCell,
      getBoard,
      renderContent,
      resetBoard
    }
})();


const playerFactory = (name, plays) => {
    return {
        get name() { return name; },
        get plays() { return plays; },
    };
};

const flowOfTheGame = (player1Name, player2Name) => {
    console.log("Aqui el juego");
    let player1 = playerFactory(player1Name, 'X');
    let player2 = playerFactory(player2Name, 'O');
    let currentPlayer = player1;

    const switchPlayers = () => {
        if(currentPlayer===player1){
          currentPlayer=player2;
        } else {
          currentPlayer=player1;
        }
      }
    
    return {
        switchPlayers,
        get currentPlayer(){ return currentPlayer; }
    }
};

/* console.log(gameBoard); */



/* Modify the array inside the gameBoard object */
/* Access to the gameboard array*/
/* let gameboard = gameBoard.gameboard; 
console.log(gameboard);
gameboard[0] = "O";
console.log(gameboard);

renderContent(); */

/* the logic that checks for when the game is over */

/* Clean up the interface to allow players to put in their names
    a button to start restart the game
    an element that congratulates the winning player */


gameBoard.renderContent();
formulario.addEventListener('submit', gameBoard.getBoard());