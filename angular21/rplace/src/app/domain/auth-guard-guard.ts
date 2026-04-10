import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  
  if(!sessionStorage.getItem('token'))
    return router.navigate([''])
    // return router.createUrlTree([''])
  
  return true;
};
