import { FormControl } from '@angular/forms';
import { Card } from "./card.model";

export interface Deck {
  id: string;
  name: string;
  cards: Card[];
  pokemonCount: number;
  trainerCount: number;
  colorTypes: string[];
}

export interface DeckForm {
  id?: FormControl<string | null | undefined>;
  name: FormControl<string | null | undefined>;
  cards: FormControl<Card[] | null | undefined>;
}
