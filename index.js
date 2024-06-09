let messageElement = document.querySelector("#message-el");
let sumElement = document.querySelector("#sum-el");
let cardsElement = document.querySelector("#cards-el");
let sum = 0;
let scoreElement = document.querySelector("#score");
let message = "";

let hasBlackJack = false;
let isAlive = false;
let cards = [];

function getRandomCard() {
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

function renderGame() {
  let score = 200;
  cardsElement.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsElement.textContent += cards[i] + " ";
  }
  sumElement.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
    score += 50;
  } else {
    message = "You're out of the game!";
    score -= 50;
    isAlive = false;
  }
  messageElement.textContent = message;
  scoreElement.textContent = "Score: " + score;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

let startGameButton = document.querySelector("#start-game");
let newCardButton = document.querySelector("#new-card");
startGameButton.addEventListener("click", startGame);
newCardButton.addEventListener("click", newCard);
