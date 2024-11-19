import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { of } from 'rxjs';

@Component({
  selector: 'app-child-b',
  standalone: true,
  imports: [],
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.css',
})
export class ChildBComponent implements OnInit {
  title = inject(Title);
  ngOnInit(): void {
    // of('ChildB').subscribe({
    //   next: (title) => this.title.setTitle(title),
    // });
    this.title.setTitle(`Application | ChildB`);
  }
}
