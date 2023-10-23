import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/models/card.model';
import { CardService } from 'src/app/shared/services';

@Component({
  selector: 'app-deck-form',
  templateUrl: './deck-form.component.html',
  styleUrls: ['./deck-form.component.scss'],
})
export class DeckFormComponent implements OnInit {
  public cards!: Observable<Card[]>;


  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }
}
