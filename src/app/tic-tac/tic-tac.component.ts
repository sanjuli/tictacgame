import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf],
  templateUrl: './tic-tac.component.html',
  styleUrl: './tic-tac.component.css',
})
export class TicTacComponent {
  cells: string[] = Array(9).fill(null);
  xIsNext: boolean = true;
  winner: string | null = null;
  tabla: string | null = 'Partida Tablas';

  makeMove(index: number) {
    if (!this.cells[index] && !this.winner) {
      this.cells[index] = this.xIsNext ? 'X' : 'O';
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
    }
  }

  calculateWinner(): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // horizontal
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // vertical
      [0, 4, 8],
      [2, 4, 6], // diagonalPbit
    ];
    for (const [a, b, c] of lines) {
      if (
        this.cells[a] &&
        this.cells[a] === this.cells[b] &&
        this.cells[a] === this.cells[c]
      ) {
        return this.cells[a];
      }
    }
    return null;
  }
  tablasMatch(): string | null {
    const allCellsFilled = this.cells.every((cell) => cell !== null);
    console.log(allCellsFilled);
    console.log(this.winner);
    if (allCellsFilled && !this.winner) {
      return this.tabla;
    }
    return null;
  }

  resetGame() {
    this.cells.fill('');
    this.winner = null;
    this.xIsNext = true;
    this.tabla = null;
  }
}
