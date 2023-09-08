let cells = document.querySelectorAll(".cell");
let currentPlayer;

let player1Score = 0;
let player2Score = 0;

let playersData = {
  player1Name: "Pedro P.",
  player1Symbol: "./assets/XSymbol.svg",
  player2Name: "Renan",
  player2Symbol: "./assets/OSymbol.svg",
};

let board = {
  A0: "",
  A1: "",
  A2: "",
  B1: "",
  B2: "",
  B3: "",
  C1: "",
  C2: "",
  C3: "",
};

function init() {
  document.getElementById("next-round").style.display = "none";

  cells.forEach(function (cell) {
    cell.addEventListener("click", newMove);
  });

  currentPlayer = [playersData["player1Name"], playersData["player1Symbol"]];

  document.getElementById("player1Name").innerText = playersData.player1Name;
  document.getElementById("player2Name").innerText = playersData.player2Name;
}

function newMove(e) {
  let cell = document.getElementById(e.target.getAttribute("id"));

  document
    .getElementById("scoreboard")
    .querySelectorAll("p")
    .forEach(function (element) {
      if (element.innerText == currentPlayer[0]) {
      }
    });

  const currentSymbol = document.createElement("img");
  currentSymbol.setAttribute("src", currentPlayer[1]);
  cell.appendChild(currentSymbol);
  board[cell.id] = currentPlayer[1];

  cell.appendChild(currentSymbol);
  cell.removeEventListener("click", newMove);

  if (
    // Linhas retas verticais
    (board["A0"] == currentPlayer[1] &&
      board["A1"] == currentPlayer[1] &&
      board["A2"] == currentPlayer[1]) ||
    (board["B0"] == currentPlayer[1] &&
      board["B1"] == currentPlayer[1] &&
      board["B2"] == currentPlayer[1]) ||
    (board["C0"] == currentPlayer[1] &&
      board["C1"] == currentPlayer[1] &&
      board["C2"] == currentPlayer[1]) ||
    // Linhas retas horizontais
    (board["A0"] == currentPlayer[1] &&
      board["B0"] == currentPlayer[1] &&
      board["C0"] == currentPlayer[1]) ||
    (board["A1"] == currentPlayer[1] &&
      board["B1"] == currentPlayer[1] &&
      board["C1"] == currentPlayer[1]) ||
    (board["A2"] == currentPlayer[1] &&
      board["B2"] == currentPlayer[1] &&
      board["C2"] == currentPlayer[1]) ||
    // Diagonais
    (board["A0"] == currentPlayer[1] &&
      board["B1"] == currentPlayer[1] &&
      board["C2"] == currentPlayer[1]) ||
    (board["A2"] == currentPlayer[1] &&
      board["B1"] == currentPlayer[1] &&
      board["C0"] == currentPlayer[1])
  ) {
    winner(currentPlayer);
    if (currentPlayer[0] == playersData["player1Name"]) {
      player1Score += 1;
      localStorage.setItem("player1_Score", player1Score);
    } else {
      player2Score += 1;
      localStorage.setItem("player2_Score", player2Score);
    }
  }

  currentPlayer =
    currentPlayer[0] == playersData["player1Name"] &&
    currentPlayer[1] == playersData["player1Symbol"]
      ? [playersData["player2Name"], playersData["player2Symbol"]]
      : [playersData["player1Name"], playersData["player1Symbol"]];

  console.log(JSON.stringify(board));
}

function winner(currentPlayer) {
  console.log("Vencedor é " + currentPlayer[0]);
  document.getElementById("next-round").style.display = "block";

  document.getElementById("next-round").addEventListener("click", function () {
    location.reload();
  });
}

init();
