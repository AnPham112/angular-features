import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);

  goToItem(event: Event) {
    event.preventDefault();
    // localhost:4200/items
    // this.router.navigate(['items']);

    // localhost:4200/items
    // this.router.navigate(['/items']);

    // localhost:4200/items
    //  this.router.navigate(['/items'], { relativeTo: this.route });

    // localhost:4200/home/items
    // this.router.navigate(['/home/items']);

    // localhost:4200/home/items
    this.router.navigate(['items'], { relativeTo: this.route });
  }
}
