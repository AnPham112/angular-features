import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../app/services/auth.service';

export const adminCanMatch: CanMatchFn = () => {
  const authService = inject(AuthService);
  const userRole = authService.getUserRole();
  return userRole === 'admin';
};
