import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

export class Game {
  name: string;
  group: string;
  icon: string;
  background: string;

  constructor(name: string, group: string, icon: string, background: string) {
    this.name = name;
    this.group = group;
    this.icon = icon;
    this.background = background;
  }

}

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  selected$: BehaviorSubject<Game> = new BehaviorSubject<Game>(null);

  constructor() {
    const savedGameJson = localStorage.getItem('selectedGame');
    if (savedGameJson != null)
      this.selected$.next(JSON.parse(savedGameJson));
    this.selected$.subscribe(game => localStorage.setItem('selectedGame', JSON.stringify(game)));
  }

  select(game: Game) {
    this.selected$.next(game);
  }

  get(): Observable<Game[]> {
    return of([
      new Game('World of Warcraft', 'blizzard', 'assets/img/wow-icon.png', 'url("../../../assets/img/wow-classic.jpg")'),
      new Game('Diablo III', 'blizzard', 'assets/img/diablo3-icon.png', 'url("../../../assets/img/diablo3-background.jpg")'),
      new Game('Hearthstone', 'blizzard', 'assets/img/hearthstone-icon.png', ''),
      new Game('Destiny 2', 'parceiros', 'assets/img/destiny2-icon.png', '')
    ]);
  }

}
