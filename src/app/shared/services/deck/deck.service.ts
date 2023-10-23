import { Injectable } from '@angular/core';
import { Deck } from '../../models/deck.model';
import { User } from '../../models/user.model';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private key = 'decks';

  constructor(private storageService: StorageService<Deck>) {}

  getAll(): Deck[] {
    return this.storageService.getList(this.key);
  }

  getByUser(user: User): Deck[] {
    const decks = this.storageService.getList(this.key);
    return decks.filter(deck => deck.userId === user.id)
  }

  add(deck: Deck): void {
    this.storageService.addItem(this.key, deck);
  }

  update(deck: Deck): void {
    this.storageService.editItem(this.key, deck);
  }

  delete(deck: Deck): void {
    this.storageService.removeItem(this.key, deck);
  }
}
