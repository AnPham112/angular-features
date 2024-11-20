import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../app/services/auth.service';

export const hasPermissionGuard: CanActivateChildFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log(authService.hasPermission());
  if (authService.hasPermission()) {
    return true;
  } else {
    router.navigate(['/no-access']);
    return false;
  }
};
