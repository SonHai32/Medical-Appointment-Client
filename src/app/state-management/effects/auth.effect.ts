import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../services/auth-service/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '../actions/auth.action';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import AuthToken from 'src/app/models/auth-token.model';
import { PatientScheduleActions } from '../actions/patient-schedule.action';
@Injectable()
export class AuthEffect {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

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
            errorMessage: (error as HttpErrorResponse).error,
          })
        )
      )
    )
  );

  loginSuccessEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.LoginSuccessAction),
      map(({ accessToken }) => {
        this.router.navigate(['/']);
        return AuthActions.CheckAuthSuccessAction({ accessToken });
      }),
      catchError((error) =>
        of(
          AuthActions.GetUserAuthFailAction({
            message: (error as HttpErrorResponse).error,
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
            errorMessage: (error as HttpErrorResponse).error,
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
      map((user: User) => {
        return AuthActions.GetUserAuthSuccessAction({ user });
      }),
      catchError((error) =>
        of(
          AuthActions.GetUserAuthFailAction({
            message: (error as HttpErrorResponse).error,
          })
        )
      )
    )
  );

  LogoutEffec$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.SignOutAction),
      mergeMap(() => this.authService.logOut()),
      map(() => AuthActions.SignOutSuccessAction()),
      catchError((error) =>
        of(
          AuthActions.SignOutFailAction({
            errorMessage: (error as HttpErrorResponse).error,
          })
        )
      )
    )
  );
  // GetUserAuthSuccessEffect$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(AuthActions.GetUserAuthSuccessAction),
  //     map(() => {
  //       console.log("Loop");
  //       return PatientScheduleActions.checkPatientRecoredFromLocalStorage()
  //     })
  //   )
  // );
}
