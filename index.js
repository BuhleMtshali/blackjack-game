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
  cardsElement.textContent = "Cards: " + sum;
  for (let i = 0; i < cards.length; i++) {
    cardsElement.textContent += cards[i] + " ";
  }
  sumElement.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageElement.textContent = message;
}

let startGameButton = document.querySelector("#start-game");
let newCardButton = document.querySelector("#new-card");
startGameButton.addEventListener("click", startGame);
newCardButton.addEventListener("click", newCard);
