import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

export class Tab {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

}

@Injectable({
  providedIn: 'root'
})
export class TabService {
  selected$: BehaviorSubject<Tab> = new BehaviorSubject<Tab>(null);

  constructor() {
    const savedTabJson = localStorage.getItem('selectedTab');
    if (savedTabJson != null)
      this.selected$.next(JSON.parse(savedTabJson));
    this.selected$.subscribe(tab => localStorage.setItem('selectedTab', JSON.stringify(tab)));
  }

  select(tab: Tab) {
    this.selected$.next(tab);
  }

  get(): Observable<Tab[]> {
    return of([
      new Tab('jogos'),
      new Tab('social'),
      new Tab('loja'),
      new Tab('noticias')
    ]);
  }

}
