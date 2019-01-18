//this file replaces the previously used mock-heroes.ts
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 11, name: 'Wolverine' },
      { id: 12, name: 'Jean' },
      { id: 13, name: 'Professor X' },
      { id: 14, name: 'Magneto' },
      { id: 15, name: 'Cyclops' },
      { id: 16, name: 'Storm' },
      { id: 17, name: 'Kitty' },
      { id: 18, name: 'Pyro' },
      { id: 19, name: 'Iceman' },
      { id: 20, name: 'Rogue' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  // constructor() { }
}
