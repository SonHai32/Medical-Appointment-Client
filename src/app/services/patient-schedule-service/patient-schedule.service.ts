import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { PatientSchedule } from './../../models/patient-schedule.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientScheduleService {
  private readonly apiUrl = environment.apiUrl + '/patient-schedule';
  constructor(private http: HttpClient) {}

  addNewPatientSchedule(patientSchedule: PatientSchedule[]) {
    return this.http.post<any>(this.apiUrl, patientSchedule).pipe(take(1));
  }

  getAllPatientSchedule(userId: string) {}
}
