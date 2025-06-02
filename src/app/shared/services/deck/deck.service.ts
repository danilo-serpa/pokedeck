import { Injectable } from '@angular/core';
import { html2pdf } from 'html2pdf.js';
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

  getById(id: string): Deck | undefined {
    const decks = this.storageService.getList(this.key);
    return decks.find((deck) => deck.id === id);
  }

  getByUser(user: User): Deck[] {
    const decks = this.storageService.getList(this.key);
    return decks.filter((deck) => deck.userId === user.id);
  }

  add(deck: Deck): Deck[] {
    return this.storageService.addItem(this.key, deck);
  }

  update(deck: Deck): Deck[] {
    return this.storageService.editItem(this.key, deck);
  }

  delete(deck: Deck): Deck[] {
    return this.storageService.removeItem(this.key, deck);
  }

  deleteById(deckId: string): Deck[] {
    const deckRemove = this.getById(deckId);
    let decks: Deck[] = [];

    if (deckRemove) {
      decks = this.storageService.removeItem(this.key, deckRemove);
    }
    return decks;
  }

  generatePDF(element: HTMLElement) {
    html2pdf()
      .from(element)
      .toPdf()
      .get('pdf')
      .then((result: any) => {
        result.save();
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
