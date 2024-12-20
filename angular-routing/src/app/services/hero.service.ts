import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [
    { id: 1, name: 'Superman', description: 'Man of Steel' },
    { id: 2, name: 'Batman', description: 'The Dark Knight' },
  ];

  getHeroes() {
    return of(this.heroes);
  }

  getHeroById(id: number | string) {
    const hero = this.heroes.find((hero) => hero.id === +id);
    return of(hero);
  }
}
