import { Ward } from './../../models/ward.model';
import { District } from './../../models/district.model';
import { take } from 'rxjs/operators';
import { Province } from './../../models/province.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProvice() {
    return this.http.get<Province[]>(this.apiUrl + '/province').pipe(take(1));
  }

  getDistrict(provinceId: string) {
    return this.http
      .get<District[]>(this.apiUrl + `/district?provinceId=${provinceId}`)
      .pipe(take(1));
  }

  getWard(districtId: string) {
    return this.http.get<Ward[]>(
      this.apiUrl + `/ward?districtId=${districtId}`
    );
  }
}
