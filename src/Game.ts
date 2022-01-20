import {PlayableBoard} from "./PlayableBoard";
import {Symbol} from "./Tile";
import {Board} from "./Board";

export class Game {
  private lastSymbol: Symbol = Symbol.EMPTY;
  private board: PlayableBoard = new PlayableBoard();
  private getNextSymbol = (lastSymbol: Symbol) => lastSymbol === Symbol.X ? Symbol.O : Symbol.X

  public play(row: number, column: number): void {
    const symbol = this.getNextSymbol(this.lastSymbol)

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

  public getReadOnlyBoard(): Board {
    return this.board as Board
  }
}
