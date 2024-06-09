let messageElement = document.querySelector("#message-el");
let sumElement = document.querySelector("#sum-el");
let cardsElement = document.querySelector("#cards-el");
let sum = 0;
let score = document.querySelector("#score");
let message = "";
score = 200;
let hasBlackJack = false;
let isAlive = false;
let cards = [];

function getRandomCard(event) {
  event.preventDefault();
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame(event) {
  event.preventDefault();
  isAlive = true;
  let firstcard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstcard, secondCard];
  sum = firstcard + secondCard;

  renderGame();
}

function renderGame(event) {
  event.preventDefault();
}

let startGameButton = document.querySelector("#start-game");
let newCardButton = document.querySelector("#new-card");
startGameButton.addEventListener("click", startGame);
newCardButton.addEventListener("click", newCard);
