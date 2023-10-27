import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  try {
    const isLogged = !!userService.getCurrentUser();

    if (isLogged) {
      return true;
    } else {
      router.navigateByUrl('/');
      return false;
    }
  } catch (e) {
    router.navigateByUrl('/');
    return false;
  }

};
