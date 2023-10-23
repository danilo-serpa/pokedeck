import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/models/card.model';
import { Deck, DeckForm } from 'src/app/shared/models/deck.model';
import { CardService } from 'src/app/shared/services';
import { DeckService } from './../../../../shared/services/deck/deck.service';

@Component({
  selector: 'app-deck-form',
  templateUrl: './deck-form.component.html',
  styleUrls: ['./deck-form.component.scss'],
})
export class DeckFormComponent implements OnInit {
  public cards!: Observable<Card[]>;

  public deckForm!: FormGroup<DeckForm>;

  constructor(
    private cardService: CardService,
    private deckService: DeckService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cards = this.cardService.getCards();

    this.createForm();
  }

  createForm(deck?: Deck): void {
    this.deckForm = new FormGroup<DeckForm>({
      name: new FormControl(deck?.name ?? null, [Validators.required]),
      cards: new FormControl(deck?.cards ?? [], [Validators.required]),
    });
  }

  checkChange(card: Card): void {
    let indexCard =
      this.deckForm.value.cards?.findIndex((c) => c === card) ?? -1;
    if (indexCard > -1) {
      let cardsSelected = this.deckForm.value.cards?.filter(c => c.id !== card.id);
      this.deckForm.controls.cards.setValue(cardsSelected);
    } else {
      let cardsSelected = this.deckForm.value.cards;
      cardsSelected?.push(card);
      this.deckForm.controls.cards.setValue(cardsSelected);
    }

    if (!this.deckForm.controls.cards.value?.length) {
      this.deckForm.controls.cards.setErrors
    }
  }

  save(): void {
    if (this.deckForm.valid) {
      let deckForSave = <Deck>{
        name: this.deckForm.value.name,
        cards: this.deckForm.value.cards ?? [],
        pokemonCount: this.deckForm.value.cards?.filter(
          (c) => c.supertype === 'Pokémon'
        ).length,
        trainerCount: this.deckForm.value.cards?.filter(
          (c) => c.supertype === 'Trainer'
        ).length,
      };

      if (this.deckForm.value.id) {
        this.deckService.editDeck(deckForSave);
      } else {
        this.deckService.createDeck(deckForSave);
      }

      this.router.navigateByUrl('deck/list');
    }
  }
}
