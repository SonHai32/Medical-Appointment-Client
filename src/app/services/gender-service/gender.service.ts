import { take } from 'rxjs/operators';
import { Gender } from './../../models/gender.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenderService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getGender(): Observable<Gender[]> {
    return this.http.get<Gender[]>(this.apiUrl + '/gender').pipe(take(1));
  }
}
