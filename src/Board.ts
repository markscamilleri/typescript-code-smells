import { Symbol, Tile } from "./Tile";

export class Board {
  private gameTiles: Tile[] = [];

  constructor() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const tile: Tile = { row: i, column: j, symbol: Symbol.EMPTY };
        this.gameTiles.push(tile);
      }
    }
  }

  public getTileAt(row: number, column: number): Tile {
    return this.gameTiles.find((t: Tile) => t.row == row && t.column == column)!;
  }

  public isTileNotEmpty(row: number, column: number): boolean {
    return this.getTileAt(row, column).symbol !== Symbol.EMPTY;
  }

  public fillTileAt(symbol: Symbol, row: number, column: number): void {
    this.gameTiles.find((t: Tile) => t.row == row && t.column == column)!.symbol = symbol;
  }

  public getSymbol(row: number, column: number) {
    return this.getTileAt(row, column).symbol;
  }
}