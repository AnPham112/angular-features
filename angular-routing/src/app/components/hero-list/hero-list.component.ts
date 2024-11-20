import { Component, inject } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { AsyncPipe } from '@angular/common';
import { Hero } from '../../models/hero.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css',
})
export class HeroListComponent {
  heroService = inject(HeroService);
  router = inject(Router);
  heroes$ = this.heroService.getHeroes();

  goToHero(hero: Hero) {
    // this.router.navigate([`/hero/${hero.id}`]);
    this.router.navigate(['hero', hero.id]);
  }
}
