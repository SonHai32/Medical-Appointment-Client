import { Doctor } from './../../models/doctor.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private readonly apiUrl =
    environment.apiUrl + '/doctors/getAllByHospitalAndSpecialist';
  constructor(private http: HttpClient) {}

  getDoctorByHospitalAndSpecialist(hospitalId: string, specialistId: string) {
    return this.http.get<Doctor[]>(
      `${this.apiUrl}?hospitalId=${hospitalId}&specialistId=${specialistId}`
    );
  }
}
