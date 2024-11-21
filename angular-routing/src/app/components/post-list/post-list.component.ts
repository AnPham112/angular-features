import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  route = inject(ActivatedRoute);
  products$ = this.route.data.pipe(map((data) => data['products'].products));
}
