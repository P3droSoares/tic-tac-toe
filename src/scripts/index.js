import { saveCookie } from "./cookie_manager";
import "../style/index_style.css"

const startBtn = document.getElementById("start_btn");

document.querySelectorAll("input[type='radio']").forEach((piece) => {
  piece.addEventListener("click", function () {
    if (
      (document.getElementById("X_piece_challenger").checked &&
        document.getElementById("X_piece_opponent").checked) ||
      (document.getElementById("O_piece_challenger").checked &&
        document.getElementById("O_piece_opponent").checked)
    ) {
      startBtn.setAttribute("disabled", "true");
      startBtn.style.opacity = 0.5;

      const errorMsg = document.createElement("p");
      errorMsg.id = "error_msg";

      errorMsg.innerText = "Duas peças iguais foram selecionadas!";
      errorMsg.style.fontSize = ".9rem";
      errorMsg.style.color = "#c1121f";

      document.getElementById("form").appendChild(errorMsg);
    } else {
      startBtn.removeAttribute("disabled");
      startBtn.style.opacity = 1;

      document
        .getElementById("form")
        .removeChild(document.getElementById("error_msg"));
    }
    console.log(startBtn.attributes);
  });
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const players = {
    challenger: {
      name: document.getElementById("challenger_name").value,
      score: 0,
      piece: document.querySelector("input[name='challenger_piece']:checked")
        .value,
    },
    opponent: {
      name: document.getElementById("opponent_name").value,
      score: 0,
      piece: document.querySelector("input[name='opponent_piece']:checked")
        .value,
    },
  };
  saveCookie(players);
});
