import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicTacComponent } from './tic-tac/tic-tac.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicTacComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'words-game';
}
