import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [AsyncPipe, NgIf, RouterLink],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent {
  route = inject(ActivatedRoute);
  heroService = inject(HeroService);
  // hero$ = this.route.params.pipe(
  //   switchMap((param) => this.heroService.getHeroById(param['id']))
  // );
  hero$ = this.route.queryParams.pipe(
    switchMap((qParams) => this.heroService.getHeroById(qParams['id']))
  );
  // hero$!: Observable<Hero | undefined>;
  // ngOnInit(): void {
  // const heroId = this.route.snapshot.params['id'];
  // this.hero$ = this.heroService.getHeroById(heroId);
  // }
  // ngOnInit(): void {
  //   this.hero$ = this.route.params.pipe(
  //     switchMap((param) => this.heroService.getHeroById(param['id']))
  //   );
  // }
}
