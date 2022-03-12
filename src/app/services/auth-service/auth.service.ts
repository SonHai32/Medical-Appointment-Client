import { AuthActions } from './../../state-management/actions/auth.action';
import { Store } from '@ngrx/store';
import { map, tap, take } from 'rxjs/operators';
import { User } from './../../models/user.model';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import AuthToken from 'src/app/models/auth-token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl + '/auth';
  private refreshTokenTimeOut: any;

  constructor(private http: HttpClient, private store: Store) {}

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.apiUrl}/login`, {
      username,
      password,
    });
  }

  refreshToken(): Observable<AuthToken> {
    return this.http
      .get<AuthToken>(`${this.apiUrl}/refreshToken`, { withCredentials: true })
      .pipe(
        map((token) => {
          if (token) {
            token.expiresIn = new Date(token.expiresIn);
            const expiresOffset = token.expiresIn.getTime() - Date.now();
            this.refreshTokenTimeOut = setTimeout(
              () => this.store.dispatch(AuthActions.CheckAuthAction()),
              expiresOffset
            );
          }
          return token;
        })
      );
  }

  getAuthUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/getUser`).pipe(take(1));
  }

  logOut(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/logout`).pipe(take(1));
  }
}
