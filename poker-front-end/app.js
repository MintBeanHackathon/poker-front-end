$(document).ready(function () {
  const path = "public/images/poker-cards/";
  const cards = [
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
  
  $("#deal").on('click', function() {
    $("#cardInHandOne").attr("src", cards[randomCardIndex()]);
    $("#cardInHandTwo").attr("src", cards[randomCardIndex()]);
  })
});

function randomCardIndex() {
    
    const randomIndex = Math.floor(Math.random() * 52) + 1;
  

    return randomIndex;
}