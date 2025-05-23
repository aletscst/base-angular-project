import { CanActivateFn, Router } from '@angular/router';
import { LSKeys } from '../../shared/collections/local-storage.collection';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  if(!localStorage.getItem(LSKeys.AUTH_TOKEN)) {
    router.navigate(['/login']);
    return false;
  }
  
  return true;
};
