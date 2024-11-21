import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../app/services/auth.service';

// Role-based routing.
// Authentication guards.
// Feature flag routing.
// Performance optimizations in lazy-loaded routes.
export const adminCanMatch: CanMatchFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const userRole = authService.getUserRole();
  router.navigate(['/login']);
  return userRole === 'admin';
};

// examples

// export const timeBasedGuard: CanMatchFn = (route, segments) => {
//   const currentHour = new Date().getHours();
//   return currentHour >= 9 && currentHour <= 17; // Only match between 9 AM and 5 PM
// };

// const routes: Routes = [
//   {
//     path: 'working-hours',
//     loadChildren: () => import('./working-hours/working-hours.module').then(m => m.WorkingHoursModule),
//     canMatch: [timeBasedGuard],
//   },
// ];
