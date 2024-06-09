let messageElement = document.querySelector("#message-el");
let sumElement = document.querySelector("#sum-el");
let cardsElement = document.querySelector("#cards-el");
let sum = document.querySelector("#sum-el");
let score = document.querySelector("#score");

function startGame() {
  renderGame();
}

function renderGame(event) {
  event.preventDefault();
}

let startGameButton = document.querySelector("#start-game");
startGameButton.addEventListener("click", startGame);
let newCardButton = document.querySelector("#new-card");
newCardButton.addEventListener("click", newCard);
