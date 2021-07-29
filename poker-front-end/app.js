const deck = require("./assets/scripts/cards.js");

console.log(deck);
const showCard = (deck) => {
  $(".card").attr("src", deck[0].twoClubs);
};

showCard();
