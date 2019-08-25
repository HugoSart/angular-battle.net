import {Component, HostBinding, OnInit} from '@angular/core';
import {Game, GamesService} from '../../../../services/games.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface IGroup {
  name: string;
  games: Game[];
}

function splitInGroups(games: Game[]): IGroup[] {
  const groups = new Map<string, IGroup>();
  games.forEach(game => {
    const group = groups.get(game.group);
    if (group != null) {
      group.games.push(game);
    } else {
      groups.set(game.group, {name: game.group, games: [game]});
    }
  });

  return Array.from(groups.values());
}

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent {
  selectedGame$: Observable<Game>;
  groups$: Observable<IGroup[]>;

  @HostBinding('class.small') small = true;

  constructor(private gameService: GamesService) {
    this.selectedGame$ = this.gameService.selected$;
    this.groups$ = this.gameService.get().pipe(map(splitInGroups));
  }

  select(game: Game) {
    this.gameService.select(game);
  }

}
