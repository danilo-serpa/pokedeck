import { Injectable } from '@angular/core';
import { Deck } from '../../models/deck.model';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private key = 'decks';

  constructor(private storageService: StorageService<Deck>) {}

  getDecks(): Deck[] {
    return this.storageService.get(this.key);
  }

  createDeck(deck: Deck): void {
    this.storageService.addItem(this.key, deck);
  }

  editDeck(deck: Deck): void {
    this.storageService.editItem(this.key, deck);
  }

  removeDeck(deck: Deck): void {
    this.storageService.removeItem(this.key, deck);
  }
}
