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

export default function checkWinner(slot, name) {
  board[slot.id] = name;
  if (
    // Linhas retas verticais
    (board["A0"] == name && board["A1"] == name && board["A2"] == name) ||
    (board["B0"] == name && board["B1"] == name && board["B2"] == name) ||
    (board["C0"] == name && board["C1"] == name && board["C2"] == name) ||
    // Linhas retas horizontais
    (board["A0"] == name && board["B0"] == name && board["C0"] == name) ||
    (board["A1"] == name && board["B1"] == name && board["C1"] == name) ||
    (board["A2"] == name && board["B2"] == name && board["C2"] == name) ||
    // Diagonais
    (board["A0"] == name && board["B1"] == name && board["C2"] == name) ||
    (board["A2"] == name && board["B1"] == name && board["C0"] == name)
  ) {
    return true;
  } else {
    return false;
  }
}
