import Card from './Card.js'
const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9"];
const dealedCard = new Array(7);
 export default class Deck {
    constructor(cards = initialDeck()) {
        this.cards = cards;
    }
   get numberOfCards() {
        return this.cards.length;
      }
    
      dealCard() {
        return this.cards.card
      }

      pop() {
        return this.cards.shift()
      }
    
      push(card) {
        this.cards.push(card)
      }
    
      shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
          const newIndex = Math.floor(Math.random() * (i + 1))
          const oldValue = this.cards[newIndex]
          this.cards[newIndex] = this.cards[i]
          this.cards[i] = oldValue
        }
      }
}

function initialDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        })
    })
}
