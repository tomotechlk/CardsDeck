// Code to shuffle a deck of cards
// Created to share the code with

// all card elements

const values = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];



// empty array to contain cards deck
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

// display all results
let showDeck= [];
for (let i = 1; i < 52; i++) {
    showDeck += (deck[i].Value+deck[i].Suit+ ", ");
}

console.log(showDeck);
