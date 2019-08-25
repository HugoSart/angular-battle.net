import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Game, GamesService} from '../services/games.service';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css']
})
export class LauncherComponent {
  selectedGame$: Observable<Game>;

  constructor(private gameService: GamesService) {
    this.selectedGame$ = gameService.selected$;
    this.selectedGame$.subscribe(game => {
      if (game == null) return;
      this.backgroundImage = game.background;
    });
  }

  @HostBinding('style.background-image') backgroundImage = 'url("../../../assets/img/wow-classic.jpg")';

}
