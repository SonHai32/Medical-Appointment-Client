import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HospitalService } from 'src/app/models/hospital-service.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HospitalServiceService {
  private readonly apiUrl = environment.apiUrl + '/service/getByHospital';
  constructor(private http: HttpClient) {}

  getAllByHospital(hospitalId: string) {
    return this.http
      .get<HospitalService[]>(this.apiUrl + `?hospitalId=${hospitalId}`)
      .pipe();
  }
}
