import Deck from './assets/scripts/Deck.js';
const deck = new Deck();
const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")
const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }
let comWarDeck = new Array(4);
let playerWarDeck = new Array(4);
let playerDeck, computerDeck, inRound, stop

$(".startButton").on('click', function() {

    $('.section').css({"display":"none"});
    $('.section_game').css({"display":"block"});
    
})
startGame();
document.addEventListener("click", () => {
    text.innerText = "Click Anywhere to Play"
   
    if (stop) {
      startGame()
      return
    }
  
    if (inRound) {
      cleanBeforeRound()
    } else {
      flipCards()
    }
  })

function startGame() {
    const deck = new Deck()
    deck.shuffle()
  
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    inRound = false
    stop = false
    cleanBeforeRound()
  }
  
function cleanBeforeRound() {
    inRound = false
    computerCardSlot.innerHTML = ""
    playerCardSlot.innerHTML = ""
    updateDeckCount()
  }
  
  function flipCards() {
    inRound = true
  
    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()
  
    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())
    console.log(computerCardSlot, "card slot for computer")
    updateDeckCount()
  
    text.innerText = "You got the card"
    if (isRoundWinner(playerCard, computerCard) === 'win') {
       if(comWarDeck.length > 0 && playerWarDeck.length > 0) {
        let toCon = playerWarDeck.concat(comWarDeck);
        console.log(toCon)
        for(const card of toCon)
            playerDeck.push(card);
        playerWarDeck = [];
        comWarDeck = [];
        console.log(playerDeck, "playerDeck after concat")
        } else {
            playerDeck.push(playerCard)
            playerDeck.push(computerCard)
        }
      
    } else if (isRoundWinner(computerCard, playerCard) === 'war') {
        text.innerText = "War!"
        playerDeck.push(playerCard)
        computerDeck.push(computerCard)
        if(playerDeck.numberOfCards > 4 && computerDeck.numberOfCards > 4){
            warAction();
        }
    } else {
    text.innerText = "You lost the card"
    if(comWarDeck.length > 0 && playerWarDeck.length > 0){
    let toCon = playerWarDeck.concat(comWarDeck);
    console.log(toCon)
        for(const card of toCon)
            computerDeck.push(card); 
            console.log(computerDeck, "computerDeck after concat")
            playerWarDeck = [];
            comWarDeck = [];
    } else {
        computerDeck.push(playerCard)
        computerDeck.push(computerCard)
    }
    console.log(computerDeck, computerDeck.length, "computer deck after won the war")
    }
    if (isGameOver(playerDeck)) {
      text.innerText = "You Lose!!"
      stop = true
    } else if (isGameOver(computerDeck)) {
      text.innerText = "You Win!!"
      stop = true
    }
  }

  function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = playerDeck.numberOfCards
  }
  
  function isRoundWinner(cardOne, cardTwo) {
    if(CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value])
        return "win"
    else if(CARD_VALUE_MAP[cardOne.value] < CARD_VALUE_MAP[cardTwo.value])
        return "lose"
    else
        return 'war'
  }
  
  function isGameOver(deck) {
    return deck.numberOfCards === 0
  }

function warAction () {
        for(let i = 0; i < 4;i++) {
        playerWarDeck[i] = playerDeck.pop();
        comWarDeck[i]= playerDeck.pop();;
        }
        console.log(comWarDeck, playerWarDeck)
    return
 }




 // if(isRoundWinner(playerWarDeck[playerWarDeck.length - 1], comWarDeck[comWarDeck.length - 1]) === 'win'){
    //     let toCon = playerWarDeck.concat(comWarDeck);
    //     for(const card of toCon)
    //         playerDeck.push(card);

    //     playerWarDeck = [];
    //     comWarDeck = [];
    //     console.log(toCon)
    //     console.log(playerDeck)
    //     return
    // } else if(isRoundWinner(playerWarDeck[playerWarDeck.length - 1], comWarDeck[comWarDeck.length - 1]) === 'lose'){
    //     let toCon = playerWarDeck.concat(comWarDeck);
    //     for(const card of toCon)
    //         computerDeck.push(card);
            
    //     playerWarDeck = [];
    //     comWarDeck = [];
    //     console.log(toCon)
    //     console.log(computerDeck)
    //     return
    // } else {
    //     warAction();
    // }