import { getCookie } from "./cookie_manager";
import "../style/game_style.css";

const playersData = JSON.parse(getCookie("playersData"));

const nextRound = document.getElementById("next_round");
nextRound.style.display = "none";

document.getElementById("player1Name").innerText = playersData.challenger.name;
document.getElementById("player2Name").innerText = playersData.opponent.name;

const gameScreen = (document.getElementById("game_screen").style.display =
  "none");
const winScreen = document.createElement("section");
const winPlayer = document.createElement("h1");
winPlayer.innerText = `${playersData.challenger.name} Venceu!`;

winScreen.appendChild(winPlayer);
document.getElementById("main").append(winScreen);
