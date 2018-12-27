import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
    { id: 11, name: 'Nebluh' },
    { id: 12, name: 'Brog' },
    { id: 13, name: 'Kneejoe' },
    { id: 14, name: 'Bluejai' },
    { id: 15, name: 'Molly'},
    { id: 16, name: 'Jimbo'},
    { id: 17, name: 'Opux'},
    { id: 18, name: 'Mauen'},
    { id: 19, name: 'Dargon'},
    { id: 20, name: 'Shitstorm'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id
  // if the heroes array is empty, the method below returns the initial number
  //if the heroes array is not empty, the method below return the highest hero id + 1

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  
  constructor() { }
}
