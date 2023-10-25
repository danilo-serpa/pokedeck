import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IgxPaginatorComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/models/card.model';
import { Deck, DeckForm } from 'src/app/shared/models/deck.model';
import { Response } from 'src/app/shared/models/response.model';
import { CardService } from 'src/app/shared/services';
import { UserService } from 'src/app/shared/services/user/user.service';
import { v4 as uuidv4 } from 'uuid';
import { DeckService } from './../../../../shared/services/deck/deck.service';

@Component({
  selector: 'app-deck-form',
  templateUrl: './deck-form.component.html',
  styleUrls: ['./deck-form.component.scss'],
})
export class DeckFormComponent implements OnInit {
  public cards$!: Observable<Response<Card[]>>;
  public deck?: Deck;
  public deckForm!: FormGroup<DeckForm>;

  @ViewChild('paginator', { static: true })
  public paginator!: IgxPaginatorComponent;
  public itemsPerPage = [10, 20, 30];
  public currentPerPage = 10;
  public currentPage = 0;

  constructor(
    private cardService: CardService,
    private deckService: DeckService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const deckId = this.route.snapshot.params['id'];
    this.deck = this.deckService.getById(deckId);
    this.createForm(this.deck);

    this.cards$ = this.cardService.getCards(this.currentPage, this.currentPerPage);
  }

  createForm(deck?: Deck): void {
    this.deckForm = new FormGroup<DeckForm>({
      name: new FormControl(deck?.name ?? null, [Validators.required]),
      cards: new FormControl(deck?.cards ?? [], [Validators.required]),
    });
  }

  checkChange(card: Card): void {
    let indexCard =
      this.deckForm.value.cards?.findIndex((c) => c.id === card.id) ?? -1;
    if (indexCard > -1) {
      let cardsSelected = this.deckForm.value.cards?.filter(
        (c) => c.id !== card.id
      );
      this.deckForm.controls.cards.setValue(cardsSelected);
    } else {
      let cardsSelected = this.deckForm.value.cards;
      cardsSelected?.push(card);
      this.deckForm.controls.cards.setValue(cardsSelected);
    }

    if (!this.deckForm.controls.cards.value?.length) {
      this.deckForm.controls.cards.setErrors;
    }
  }

  isChecked(card: Card): boolean {
    return this.deckForm.value.cards?.some((item) => item.id === card.id) ?? false;
  }

  perPageChange(perPage: number): void {
    if (this.currentPerPage !== perPage) {
      this.currentPerPage = perPage;
      this.currentPage = 0;
      this.cards$ = this.cardService.getCards(
        this.currentPage,
        this.currentPerPage
      );
    }
  }

  pageChange(numPage: number): void {
    if (this.currentPage !== numPage) {
      this.currentPage = numPage;
      this.cards$ = this.cardService.getCards(numPage, this.currentPerPage);
      console.log('Mudou a pagina');
    }
  }

  save(): void {
    if (this.deckForm.valid) {
      let deckForSave = <Deck>{
        id: this.deck?.id ?? uuidv4(),
        name: this.deckForm.value.name,
        cards: this.deckForm.value.cards ?? [],
        pokemonCount: this.deckForm.value.cards?.filter(
          (c) => c.supertype === 'Pokémon'
        ).length,
        trainerCount: this.deckForm.value.cards?.filter(
          (c) => c.supertype === 'Trainer'
        ).length,
        userId: this.userService.getCurrentUser().id,
      };

      if (this.deck?.id) {
        this.deckService.update(deckForSave);
      } else {
        this.deckService.add(deckForSave);
      }

      this.router.navigateByUrl('deck/list');
    }
  }
}
