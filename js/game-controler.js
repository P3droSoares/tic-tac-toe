let cells = document.querySelectorAll(".cell");
let roundsCounter = 1;
let switchPlayerControler = true;
let lastPlayerWin;
let roundOf = [];

const playersData = {
  player1Name: "Greg",
  player1Symbol: "./assets/XSymbol.svg",
  player2Name: "Rowley",
  player2Symbol: "./assets/OSymbol.svg",
};

function switchPlayer() {
  if (switchPlayerControler) {
    roundOf = {
      playerName: playersData.player1Name,
      playerSymbol: playersData.player1Symbol,
    };
  } else {
    roundOf = {
      playerName: playersData.player2Name,
      playerSymbol: playersData.player2Symbol,
    };
  }
  switchPlayerControler = !switchPlayerControler;
}
switchPlayer();

document.addEventListener("DOMContentLoaded", function () {
  cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
      if (roundsCounter !== 9 && cell.querySelectorAll("img").length < 1) {
        const symbolElement = document.createElement("img");
        symbolElement.src = roundOf.playerSymbol;

        cell.appendChild(symbolElement);
      } else if (roundsCounter === 9) {
        console.log("Fim do Jogo");
      }
      switchPlayer();
      roundsCounter++;
    });
  });
});
