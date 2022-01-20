import { Board } from "./Board";
import { Symbol } from "./Tile";

export class Game {
  private lastSymbol: Symbol = Symbol.EMPTY;
  private board: Board = new Board();

  private isFirstMove = (lastSymbol: Symbol) => lastSymbol === Symbol.EMPTY;

  public play(symbolToPlay: string, row: number, column: number): void {
    const symbol = (<any>Symbol)[symbolToPlay];
    if (this.isFirstMove(this.lastSymbol)) {
      if (symbol === Symbol.O) {
        throw new Error("Invalid first player");
      }
    }

    if (symbol === this.lastSymbol) {
      throw new Error("Invalid next player");
    }

    if (this.board.isTileNotEmpty(row, column)) {
      throw new Error("Invalid position");
    }

    this.board.fillTileAt(symbol, row, column);
    this.lastSymbol = symbol;
  }

  public filledRowSameSymbol(row: number) {
    if (this.board.isTileNotEmpty(row, 0)) {
      const symbol: Symbol = this.board.getSymbol(row, 0);
      if (
        symbol === this.board.getSymbol(row, 1) &&
        symbol === this.board.getSymbol(row, 2)
      )
        return symbol.toString();
    }
  }

  public winner(): string {
    return (
      this.filledRowSameSymbol(0) ||
      this.filledRowSameSymbol(1) ||
      this.filledRowSameSymbol(2) ||
      " "
    );
  }
}
