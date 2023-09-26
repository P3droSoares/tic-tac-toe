import { getCookie } from "./cookie_manager.js";
import Player from "./player.js";
import checkWinner from "./checkWinner.js";
import winRender from "./winRender.js";
import "../stylesheets/game_style.css";

const playersData = JSON.parse(getCookie("playersData"));

document.getElementById("player1Name").innerText = playersData.challenger.name;
document.getElementById("player2Name").innerText = playersData.opponent.name;

const challenger = new Player(
  playersData.challenger.name,
  playersData.challenger.piece
);
const opponent = new Player(
  playersData.opponent.name,
  playersData.opponent.piece
);

const togglePlayer = function (roundControler, challenger, opponent) {
  return roundControler ? challenger : opponent;
};

let roundControler = true;
let currentPlayer = togglePlayer(roundControler, challenger, opponent);

const slots = document.querySelectorAll(".slot");
slots.forEach((slot) => {
  slot.addEventListener("click", () => {
    if (!slot.children.length != 0) {
      currentPlayer = togglePlayer(roundControler, challenger, opponent);
      roundControler = !roundControler;
      currentPlayer.newMove(slot, currentPlayer.piece);

      if (checkWinner(slot, currentPlayer.name)) {
        winRender(currentPlayer.name);
      }
    }
  });
});
