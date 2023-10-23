import { Card } from "./card.model";

export interface Deck {
  id: string;
  name: string;
  cards: Card[];
  pokemonCount: number;
  trainnerCount: number;
  colorTypes: string[];
}
