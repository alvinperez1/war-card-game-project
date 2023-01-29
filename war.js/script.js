 const SUITS = ['Spades','Hearts','Clubs','Diamonds'];
 const VALUES = [{'A': 1},{'2': 2},{'3': 3},{'4': 4},{'5': 5},{'6': 6},{'7': 7},{'8': 8},{'9': 9},{'10': 10},{'J': 11},{'Q': 12},{'K': 13}]


 class Deck {
    constructor(cards = freshDeck()){
        this.cards = cards;
    }

    get numberOfCards(){
        return this.cards.length
    }

    shuffle(){
        for (let i = this.numberOfCards - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
 }

 class Player {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
 }


 class Card {
    constructor(suit, value, player1Card, player2Card){
        this.suit = suit;
        this.value = value;
        this.player1Card = player1Card;
        this.player2Card = player2Card;
    }
 }

 function freshDeck(){ 
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
 }

 const deck = new Deck();
 deck.shuffle();

 let player1Deck, player2Deck;



   

 startGame()
 function startGame(){
    const deck = new Deck();
    deck.shuffle();

//player 1 deck and player 2 deck split evenly and randomly
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
    player1Deck = new Deck(deck.cards.slice(0, deckMidpoint));
    player2Deck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));

    
   

    let player1Points = 0;
    let player2Points = 0;

    const gameRounds = 26;
//compares card values
for (let i = 0; i < gameRounds; i++) {
    const player1Card = player1Deck.cards[i].value;
    const player2Card = player2Deck.cards[i].value;
    if (Object.values(player1Card)[0] > Object.values(player2Card)[0]) {
        console.log(`Player 1 wins round ${i+1}`);
        player1Points++;
    } else if (Object.values(player1Card)[0] < Object.values(player2Card)[0]) {
        console.log(`Player 2 wins round ${i+1}`);
        player2Points++;
    } else {
        console.log(`Round ${i+1} is a tie`);
    }
}
console.log(`Player 1 Points: ${player1Points}`);
console.log(`Player 2 Points: ${player2Points}`);
if (player1Points > player2Points) {
    console.log("Player 1 wins the game!");
} else if (player1Points < player2Points) {
    console.log("Player 2 wins the game!");
} else {
    console.log("The game is a tie!");
}
    


     
 }


//unit testing for script.js
const chai = require('chai');
const expect = chai.expect;

describe('Deck', () => {
    it('should correctly shuffle the deck', () => {
        // create a new deck, shuffle it, and check if the order of the cards has changed
    });
});

describe('Player', () => {
    it('should correctly return player 1 card', () => {
        // create a new player1Deck, call player1Card function, and check if the returned card is the correct one
    });
    it('should correctly return player 2 card', () => {
        // create a new player2Deck, call player2Card function, and check if the returned card is the correct one
    });
});

describe('Card', () => {
  it('should correctly produce a card with a suit and a value', () => {
      //create a new card, assign suit and value
  });
});
