let cells = document.querySelectorAll(".cell");
let lastPlayerWin;
let roundsCounter = 1;

let switchPlayerControler = true;

let roundOf;

const playersData = localStorage.getItem("playersData");
alert(playersData);

function switchPlayer() {
  if (switchPlayerControler) {
  } else {
  }
  switchPlayerControler = !switchPlayerControler;
}
document.addEventListener("DOMContentLoaded", function () {
  cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
      if (roundsCounter != 9) {
        let symbol = document.createElement("img");
        symbol.id = "symbol-svg";
        document
          .getElementById("symbol-svg")
          .setAttribute("src", "./assets/OSymbol.svg");

        if (cell.querySelectorAll("span").length < 1) {
          cell.appendChild(symbol);
        }
        switchPlayer();
        roundsCounter++;
      } else {
        console.log("Fim de Jogo");
      }
    });
  });
});
