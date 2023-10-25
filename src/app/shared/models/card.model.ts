export interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo: string[];
  rules: string[];
  attacks: Attack[];
  weaknesses: Weakness[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Group;
  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: Images2;
  tcgplayer: Tcgplayer;
  selected: boolean;
}

export interface Tcgplayer {
  url: string;
  updatedAt: string;
  prices: Prices;
}

export interface Prices {
  holofoil: Holofoil;
}

export interface Holofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export interface Images2 {
  small: string;
  large: string;
}

export interface Group {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: Images;
}

export interface Images {
  symbol: string;
  logo: string;
}

export interface Legalities {
  unlimited: string;
  expanded: string;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}
