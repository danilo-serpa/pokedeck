import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IgxPaginatorComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { DeckValidators } from 'src/app/core/validators/deck.validator';
import { Card } from 'src/app/shared/models/card.model';
import { Deck, DeckForm } from 'src/app/shared/models/deck.model';
import { Response } from 'src/app/shared/models/response.model';
import { CardService } from 'src/app/shared/services';
import { UserService } from 'src/app/shared/services/user/user.service';
import { v4 as uuidv4 } from 'uuid';
import { DeckService } from './../../../../shared/services/deck/deck.service';
import { ToastService } from './../../../../shared/services/toast/toast.service';

@Component({
  selector: 'app-deck-form',
  templateUrl: './deck-form.component.html',
  styleUrls: ['./deck-form.component.scss'],
})
export class DeckFormComponent implements OnInit {
  public cards$!: Observable<Response<Card[]>>;
  public deck?: Deck;
  public deckForm!: FormGroup<DeckForm>;
  public search: string = '';

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
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const deckId = this.route.snapshot.params['id'];
    this.deck = this.deckService.getById(deckId);
    this.createForm(this.deck);

    this.cards$ = this.cardService.getCards(
      this.currentPage,
      this.currentPerPage
    );
  }

  createForm(deck?: Deck): void {
    this.deckForm = new FormGroup<DeckForm>({
      name: new FormControl(deck?.name ?? null, [Validators.required]),
      cards: new FormControl(deck?.cards ?? [], [
        Validators.required,
        Validators.minLength(24),
        Validators.maxLength(60),
        DeckValidators.limitCardsSameName,
      ]),
    });
  }

  filter(): void {
    this.cards$ = this.cardService.getCards(
      this.currentPage,
      this.currentPerPage,
      this.search
    );
  }

  checkChange(card: Card): void {
    const indexCard =
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

    this.deckForm.controls.cards.setErrors;
    this.deckForm.controls.cards.markAsTouched();
  }

  isChecked(card: Card): boolean {
    return (
      this.deckForm.value.cards?.some((item) => item.id === card.id) ?? false
    );
  }

  perPageChange(perPage: number): void {
    if (this.currentPerPage !== perPage) {
      this.currentPerPage = perPage;
      this.currentPage = 0;
      this.cards$ = this.cardService.getCards(
        this.currentPage,
        this.currentPerPage,
        this.search
      );
    }
  }

  pageChange(numPage: number): void {
    if (this.currentPage !== numPage) {
      this.currentPage = numPage;
      this.cards$ = this.cardService.getCards(
        numPage,
        this.currentPerPage,
        this.search
      );
    }
  }

  save(): void {
    if (this.deckForm.valid) {
      const cards = this.deckForm.value.cards ?? [];

      const deckForSave = <Deck>{
        id: this.deck?.id ?? uuidv4(),
        name: this.deckForm.value.name,
        cards: cards,
        pokemonCount: cards.filter((c) => c.supertype === 'Pokémon').length,
        trainerCount: cards.filter((c) => c.supertype === 'Trainer').length,
        colorTypes: this.getDistinctType(cards),
        userId: this.userService.getCurrentUser().id,
      };

      if (this.deck?.id) {
        const result = this.deckService.update(deckForSave);
        if (result) {
          this.toastService.showSuccessToast(
            'Alteração',
            'Baralho alterado com sucesso'
          );
        } else {
          this.toastService.showErrorToast(
            'Alteração',
            'Erro alterado o baralho'
          );
        }
      } else {
        const result = this.deckService.add(deckForSave);
        if (result) {
          this.toastService.showSuccessToast(
            'Criação',
            'Baralho criado com sucesso'
          );
        } else {
          this.toastService.showErrorToast(
            'Criação',
            'Erro criar o baralho'
          );
        }
      }

      this.router.navigateByUrl('deck/list');
    }
  }

  getDistinctType(cards: Card[]): string[] {
    const typesList = cards.reduce<string[]>(
      (list1, list2) => list1.concat(list2.types),
      []
    );
    return [...new Set(typesList)];
  }
}
