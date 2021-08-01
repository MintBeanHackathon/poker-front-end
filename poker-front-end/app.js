import Deck from './assets/scripts/Deck.js'
import Player from './assets/scripts/Player.js'
const deck = new Deck();
const player = new Player();
const computer = new Player("computer");
const communityCard = new Array(3);


$(".startButton").on('click', function() {
    deck.shuffle();
    $('.section').css({"display":"none"});
    $('.section_game').css({"display":"block"});
})

$("#dealCard").on('click', function() {
    const cardArr = deck.dealCard();
    console.log(cardArr)
    player.cardInHand[0] = cardArr[0];
    player.cardInHand[1] = cardArr[1];
    computer.cardInHand[0] = cardArr[2];
    computer.cardInHand[1] = cardArr[3];
    communityCard[0] = cardArr[5];
    communityCard[1] = cardArr[6];
    communityCard[2] = cardArr[7];
    console.log(player);
    console.log(computer);

        $('#0').append(`<div>${player.cardInHand[0].value}</div>`)
        $('#0').append(`<div>${player.cardInHand[0].suit}</div>`)
        $('#0').append(`<div>${player.cardInHand[0].value}</div>`)
     
  
        $('#1').append(`<div>${player.cardInHand[1].value}</div>`)
        $('#1').append(`<div>${player.cardInHand[1].suit}</div>`)
        $('#1').append(`<div>${player.cardInHand[1].value}</div>`)
    
    
})































//   $("#deal").on('click', function() {
//     $("#cardInHandOne").attr("src", cardInHand()[0]);
//     $("#cardInHandTwo").attr("src", cardInHand()[1]);
//   })
//  $('#root').html("Hello World!");

// // function randomCardIndex() { 
// //     const randomIndex = Math.floor(Math.random() * 52) + 1;
// //     return randomIndex;
// // }

// let randomRange = 52;
// function cardInHand() {
    
//     const randomIndex1 = Math.floor(Math.random() * randomRange + 1);
//     let randomIndex2 = Math.floor(Math.random() * randomRange + 1);

//     while(randomIndex1 === randomIndex2) {
//         randomIndex2 = Math.floor(Math.random() * randomRange + 1);   
//     }

//     const card1 = cards[randomIndex1];
//     const card2 = cards[randomIndex2];
//     cards[randomIndex1] = null;
//     cards[randomIndex2] = null;
//     const newCards = cards.filter(card => card !== null);
//     cards = [...newCards];
//     if(randomRange<0) return;
//     randomRange -= 2;
//     return [card1,card2];
// }

// calculateValue = (cardInHand[], cardOnTable[]) => {
//     // calculates value for whatever cards are in hand or on table
//     // table points + hand points
//     // return sum
//     // hold five cards
//     // if royal flush, you get the highest points
//     // add points to 10
//     // if one pair, you get the seond lowest points
//     // if
//     // write conditionals for points for players
//     // function is for one player
//     // pass their cards (card object) here to calculate
// }

// const SUITS = ["♠", "♣", "♥", "♦"]

// write function where return value from calculateValue is compared with returned

// insert = (index) => {
//     // takes a cards index and puts card at specific index
//     // if it goes in the hand, write logic
//     // else if it goes on the table, write logic
// }

// moveCard = (card(obj), comingFrom, goingTo) => {
//     // if card moves to your hand, recalculate its index
//     // if card moves to the table, recalculate its index
// }

// $('#root').html("<div><img src='rectangle.jpeg'></div>")

// function displayCard() {
// show card on table or in the hand
// show card when card is on the table
// take cardsToShow parameter
// EXAMPLE $('#root').html("<p>hi</p>");
// manipulate the DOM to display card in its proper spot (table or hand)
// }
// displayCard()

// removeCard = (cardObject) => {
//     // splice the deck array when a card is drawn
// }
