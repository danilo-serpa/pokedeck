import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/shared/models/deck.model';
import { DeckService } from 'src/app/shared/services';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent implements OnInit{

  public decks!: Deck[];

  constructor(private deckService: DeckService, private userService: UserService){}

  ngOnInit(): void {
    this.decks = this.deckService.getByUser(this.userService.getCurrentUser());
  }


}
