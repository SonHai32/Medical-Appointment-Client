import { take, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospital } from 'src/app/models/hospital.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  private readonly apiUrl = environment.apiUrl + '/hospitals';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.apiUrl).pipe(take(1));
  }
}
