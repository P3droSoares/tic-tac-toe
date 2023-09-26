export default class Player {
  constructor(name, piece) {
    this.name = name;
    this.piece = piece;
    this.score = 0;
  }
  newMove(slot, currentPiece) {
    const piece = document.createElement("img");
    piece.setAttribute("src", currentPiece);

    slot.appendChild(piece);
  }
}
