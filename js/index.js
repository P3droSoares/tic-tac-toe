if (document.getElementById("form")) {
  // Não permite que os jogadores selecionem simbolos iguais
  document.getElementById("form").addEventListener("click", function () {
    if (document.getElementById("X-symbol-player1").checked) {
      document
        .getElementById("X-symbol-player2")
        .setAttribute("disabled", "true");
      document.getElementById("O-symbol-player2").removeAttribute("disabled");

      document.getElementById("X-symbol-box-player2").style.opacity = 0.5;
      document.getElementById("O-symbol-box-player2").style.opacity = 1;
    } else if (document.getElementById("O-symbol-player1").checked) {
      document.getElementById("X-symbol-player2").removeAttribute("disabled");
      document
        .getElementById("O-symbol-player2")
        .setAttribute("disabled", "true");

      document.getElementById("X-symbol-box-player2").style.opacity = 1;
      document.getElementById("O-symbol-box-player2").style.opacity = 0.5;
    }
    if (document.getElementById("X-symbol-player2").checked) {
      document
        .getElementById("X-symbol-player1")
        .setAttribute("disabled", "true");
      document.getElementById("O-symbol-player1").removeAttribute("disabled");

      document.getElementById("X-symbol-box-player1").style.opacity = 0.5;
      document.getElementById("O-symbol-box-player1").style.opacity = 1;
    } else if (document.getElementById("O-symbol-player2").checked) {
      document.getElementById("X-symbol-player1").removeAttribute("disabled");
      document
        .getElementById("O-symbol-player1")
        .setAttribute("disabled", "true");

      document.getElementById("X-symbol-box-player1").style.opacity = 1;
      document.getElementById("O-symbol-box-player1").style.opacity = 0.5;
    }
  });

  // Puxa o nome e o simbolo, depois começa o jogo
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const playersData = {
      player1Name: document.getElementById("name-player1").value,
      player1Symbol: document.querySelector(
        'input[name="select-symbol-player1"]:checked'
      ).value,
      player2Name: document.getElementById("name-player2").value,
      player2Symbol: document.querySelector(
        'input[name="select-symbol-player2"]:checked'
      ).value,
    };

    //cookie=value; expires=UTCStringDate; path=/
    document.cookie.window.location.href = "game.html";
  });
}
