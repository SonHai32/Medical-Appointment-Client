import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = environment.apiUrl + '/user';
  constructor(private http: HttpClient) {}

  updateUser(user: User) {
    return this.http.patch<{ message: string; status: 'FAIL' | 'SUCCESS' }>(
      `${this.apiUrl}/update-detail`,
      { ...user }
    );
  }
}
