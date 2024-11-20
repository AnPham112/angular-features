import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = true;

  hasPermission() {
    return false;
  }

  getUserRole() {
    return 'admin1';
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
