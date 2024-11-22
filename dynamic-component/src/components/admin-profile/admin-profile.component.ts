import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css',
})
export class AdminProfileComponent {
  @Input() title!: string;
  @Input() description!: string;
}
