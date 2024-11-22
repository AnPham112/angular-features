import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { AdminProfileComponent } from '../components/admin-profile/admin-profile.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // AdminProfileComponent,
    // UserProfileComponent,
    // NgIf,
    NgComponentOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isAdmin = true;

  getProfileComponent() {
    return this.isAdmin ? AdminProfileComponent : UserProfileComponent;
  }
}
