import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService)
  const route = inject(Router)

  if (auth.isLoggedIn()){
    return true
  } else {
    route.navigate(['/login'])
    return false
  }
};


// Class-based Route guards are deprecated in favor of functional guards. An injectable class can be used as a functional guard using the inject function: canActivate: [() => inject(myGuard).canActivate()].