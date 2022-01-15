import { take } from 'rxjs/operators';
import { PatientRecord } from 'src/app/models/patient-record.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatientRecordService {
  private readonly apiUrl = environment.apiUrl + "/patient-record";

  constructor(private http: HttpClient) {}

  add(patientRecord: PatientRecord){
    return this.http.post(this.apiUrl, {...patientRecord}).pipe(take(1))
  }
  getAll(){
    return this.http.get<PatientRecord[]>(this.apiUrl).pipe(take(1))
  }
}
