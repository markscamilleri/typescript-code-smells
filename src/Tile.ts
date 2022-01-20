export enum Symbol {
  O = "O",
  X = "X",
  EMPTY = " ",
}

export interface Tile {
  row: number;
  column: number;
  symbol: Symbol;
}
