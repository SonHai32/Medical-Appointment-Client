import { map, catchError } from 'rxjs/operators';
import { AuthSelector } from './../../state-management/selectors/auth.seletor';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(AuthSelector.UserSelector).pipe(
      map((res) => {
        if (res) return true;
        else {
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError((error) => {
        return of(false);
      })
    );
    return true;
  }
}
