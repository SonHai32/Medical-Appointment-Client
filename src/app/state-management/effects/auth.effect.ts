import { AuthService } from './../../services/auth-service/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '../actions/auth.action';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import AuthToken from 'src/app/models/auth-token.model';
@Injectable()
export class AuthEffect {
  constructor(private action$: Actions, private authService: AuthService) {}

  logihEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.LoginAction),
      exhaustMap(({ username, password }) =>
        this.authService.login(username, password)
      ),
      map((accessToken: AuthToken) =>
        AuthActions.LoginSuccessAction({ accessToken })
      ),
      catchError((error) =>
        of(
          AuthActions.LoginFailAction({
            errorMessage: (error as Error).message,
          })
        )
      )
    )
  );

  loginSuccessEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.LoginSuccessAction),
      map(({ accessToken }) =>
        AuthActions.CheckAuthSuccessAction({ accessToken })
      ),
      catchError((error) =>
        of(
          AuthActions.GetUserAuthFailAction({
            message: (error as Error).message,
          })
        )
      )
    )
  );

  checkAuthEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.CheckAuthAction),
      exhaustMap(() => this.authService.refreshToken()),
      map((accessToken: AuthToken) =>
        AuthActions.CheckAuthSuccessAction({
          accessToken,
        })
      ),
      catchError((error) =>
        of(
          AuthActions.CheckAuthFailAction({
            errorMessage: (error as Error).message,
          })
        )
      )
    )
  );

  CheckAuthSuccessEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.CheckAuthSuccessAction),
      map(({ accessToken }) => AuthActions.GetUserAuthAction({ accessToken }))
    )
  );

  GetUserAuthEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.GetUserAuthAction),
      mergeMap((action) => this.authService.getAuthUser()),
      map((res: any) => {
        if (res.status === 'SUCCESS')
          return AuthActions.GetUserAuthSuccessAction({
            user: res.accessToken as User,
          });
        else
          return AuthActions.GetUserAuthFailAction({
            message: res.message as string,
          });
      })
    )
  );
}
