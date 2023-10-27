import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxStringFilteringOperand } from 'igniteui-angular';
import { Deck } from 'src/app/shared/models/deck.model';
import { DeckService } from 'src/app/shared/services';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss'],
})
export class DeckListComponent implements OnInit {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1!: IgxGridComponent;

  public decks!: Deck[];

  constructor(
    private deckService: DeckService,
    private userService: UserService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.decks = this.deckService.getByUser(this.userService.getCurrentUser());
  }

  deleteDeck(deckId: string): void {
    this.decks = this.deckService.deleteById(deckId);
    if (this.decks) {
      this.toastService.showSuccessToast(
        'Exclusão',
        'Baralho excluído com sucesso'
      );
    } else {
      this.toastService.showErrorToast(
        'Exclusão',
        'Erro ao excluir o baralho'
      );
    }
  }

  filter(target: EventTarget | null): void {
    this.grid1.filter(
      'name',
      (target as HTMLInputElement).value,
      IgxStringFilteringOperand.instance().condition('contains'),
      true
    );
    this.grid1.markForCheck();
  }
}
