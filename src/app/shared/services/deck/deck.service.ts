import { Injectable } from '@angular/core';
import { Deck } from '../../models/deck.model';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor() {}

  getDecks(): Deck[] {
    return JSON.parse(localStorage.getItem('decks') ?? '[]');
  }

  createDeck(deck: Deck): void {
    let listDeck = this.getDecks();
    listDeck.push(deck);
    localStorage.setItem('decks', JSON.stringify(deck));
  }

  removeDeck(deck: Deck): void {
    let ListDeck = this.getDecks();
    let index = ListDeck.findIndex((deck) => deck.id === deck.id);
    ListDeck.splice(index, 1);
  }

  editDeck(deck: Deck): void {
    let ListDeck = this.getDecks();
    let index = ListDeck.findIndex((deck) => deck.id === deck.id);
    ListDeck.splice(index, 1, deck);
  }
}
