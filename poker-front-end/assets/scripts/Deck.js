const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

 export default class Deck {
    constructor(cards = initialDeck()) {
        this.card = cards;
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value
    }
}

function initialDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        })
    })
}
