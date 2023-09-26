export default function (name) {
  document
    .getElementById("game_screen")
    .removeChild(document.getElementById("game_board"));
  document
    .getElementById("game_screen")
    .removeChild(document.getElementById("scoreboard"));

  const body = document.getElementById("body");
  body.style.gap = "45%";

  const winScreen = document.createElement("section");
  winScreen.id = "win_screen";

  const winTitle = document.createElement("h1");
  winTitle.id = "win_title"
  winTitle.innerText = `${name} Venceu!`;

  const nextRound = document.createElement("button");
  nextRound.id = "next_round";
  nextRound.innerText = "Próxima Rodada";

  winScreen.append(winTitle, nextRound);
  document.getElementById("main").append(winScreen);

  nextRound.addEventListener("click", () => {
    location.reload();
  });
}
