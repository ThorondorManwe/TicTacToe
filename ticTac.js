/* Store the gameboard as an array inside of a Gameboard object
Store the players inside objects too.
Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories. */

const gameBoard = {
    gameboard: ["X", "O", "X", "X", "O", "X", "X", "O", "X"],
}

/* console.log(gameBoard); */

/* A function that will render the contents of the gameboard array to the webpage */
function renderContent() {
    const gameboard = document.querySelector('.gameboard');
    const ladoDiv = 211.33;
    let gameboardArray = gameBoard.gameboard; 

    /* const stepGrid = squares ** 2; */

    for (let step = 0; step < 9; step++) {
        // Runs 15 times, with values of step 0 through 16
        const div = document.createElement('div');
        const textoArray = gameboardArray[step];
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
        /* console.log(`Hecho el div número ${step}`); */
        // llamar función para pintar divs
        changeDivs();
    }
}

/* The functions to allow players toconsole.log(gameBoard); ad marks to a specific spot on the board, and then tie it to the DOM
    letting players click on the gameboard to place their marker
    keep the player from playing in spots that are already taken */
function changeDivs() {
    // Hacer que el mouse cambie el estilo de un cuadro al pasar por encima - ¿cuándo haga clic o solo pasando el cursor?
    const divs = document.querySelectorAll('.ticTac');
    let hue = 0;
    let gameboard = gameBoard.gameboard; 
    
    divs.forEach((div) => {
        div.addEventListener('mouseenter', function(e) {
            /* console.count(e.currentTarget); */
            hue += 1;
            e.currentTarget.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
            /* console.log(this);
            this.style.backgroundColor = 'green'; */
        });
        div.addEventListener('click', function(e) {
            /* Selecciona el ID del div y lo usa en el array como index*/
            /* console.log(this.id); */
            gameboard[`${this.id}`] = "X";
            this.textContent = "X"; 
        });
    });
}


/* Modify the array inside the gameBoard object */
/* Access to the gameboard array*/
let gameboard = gameBoard.gameboard; 
console.log(gameboard);
gameboard[0] = "O";
console.log(gameboard);

renderContent();

/* the logic that checks for when the game is over */

/* Clean up the interface to allow players to put in their names
    a button to start restart the game
    an element that congratulates the winning player */