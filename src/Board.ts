import {Tile} from "./Tile";

export class Board {
    protected gameTiles: Tile[] = [];

    public getTileAt(row: number, column: number): Tile {
        return this.gameTiles.find((t: Tile) => t.row == row && t.column == column)!;
    }

    public getSymbol(row: number, column: number) {
        return this.getTileAt(row, column).symbol;
    }
}