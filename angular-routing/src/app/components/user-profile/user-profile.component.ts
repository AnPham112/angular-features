import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements ICanDeactivate {
  username = 'An';
  dirty = false;

  onChange(event: Event) {
    this.dirty = true;
  }

  canDeactivate(): boolean {
    return !this.dirty;
  }
}

export interface ICanDeactivate {
  canDeactivate(): boolean;
}
