import { map } from 'rxjs/operators';
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
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(
      `${this.apiUrl}/login`,
      {
        username,
        password,
      },
      { withCredentials: true }
    );
  }

  refreshToken(): Observable<AuthToken> {
    return this.http.get<AuthToken>(`${this.apiUrl}/refreshToken`);
  }

  getAuthUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/getUser`);
  }
}
