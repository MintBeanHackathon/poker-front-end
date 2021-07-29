$(document).ready(function () {
  
  
  $("#deal").on('click', function() {
    $("#cardInHandOne").attr("src", cardInHand()[0]);
    $("#cardInHandTwo").attr("src", cardInHand()[1]);
  })
});

// function randomCardIndex() { 
//     const randomIndex = Math.floor(Math.random() * 52) + 1;
//     return randomIndex;
// }
const path = "public/images/poker-cards/";
let cards = [
      `${path}2_of_clubs.png`,
      `${path}2_of_diamonds.png`,
      `${path}2_of_hearts.png`,
      `${path}2_of_spades.png`,
      `${path}3_of_clubs.png`,
      `${path}3_of_diamonds.png`,
      `${path}3_of_hearts.png`,
      `${path}3_of_spades.png`,
      `${path}4_of_clubs.png`,
      `${path}4_of_diamonds.png`,
      `${path}4_of_hearts.png`,
      `${path}4_of_spades.png`,
      `${path}5_of_clubs.png`,
      `${path}5_of_diamonds.png`,
      `${path}5_of_hearts.png`,
      `${path}5_of_spades.png`,
      `${path}6_of_clubs.png`,
      `${path}6_of_diamonds.png`,
      `${path}6_of_hearts.png`,
      `${path}6_of_spades.png`,
      `${path}7_of_clubs.png`,
      `${path}7_of_diamonds.png`,
      `${path}7_of_hearts.png`,
      `${path}7_of_spades.png`,
      `${path}8_of_clubs.png`,
      `${path}8_of_diamonds.png`,
      `${path}8_of_hearts.png`,
      `${path}8_of_spades.png`,
      `${path}9_of_clubs.png`,
      `${path}9_of_diamonds.png`,
      `${path}9_of_hearts.png`,
      `${path}9_of_spades.png`,
      `${path}10_of_clubs.png`,
      `${path}10_of_diamonds.png`,
      `${path}10_of_hearts.png`,
      `${path}10_of_spades.png`,
      `${path}ace_of_clubs.png`,
      `${path}ace_of_diamonds.png`,
      `${path}ace_of_hearts.png`,
      `${path}ace_of_spades.png`,
      `${path}jack_of_clubs.png`,
      `${path}jack_of_diamonds.png`,
      `${path}jack_of_hearts.png`,
      `${path}jack_of_spades.png`,
      `${path}queen_of_clubs.png`,
      `${path}queen_of_diamonds.png`,
      `${path}queen_of_hearts.png`,
      `${path}queen_of_spades.png`,
      `${path}king_of_clubs.png`,
      `${path}king_of_diamonds.png`,
      `${path}king_of_hearts.png`,
      `${path}king_of_spades.png`];
let randomRange = 52;
function cardInHand() {
    
    const randomIndex1 = Math.floor(Math.random() * randomRange + 1);
    let randomIndex2 = Math.floor(Math.random() * randomRange + 1);

    while(randomIndex1 === randomIndex2) {
        randomIndex2 = Math.floor(Math.random() * randomRange + 1);   
    }

    const card1 = cards[randomIndex1];
    const card2 = cards[randomIndex2];
    cards[randomIndex1] = null;
    cards[randomIndex2] = null;
    const newCards = cards.filter(card => card !== null);
    cards = [...newCards];
    if(randomRange<0) return;
    randomRange -= 2;
    return [card1,card2];
}

