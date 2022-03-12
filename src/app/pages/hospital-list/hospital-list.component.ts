import { PlaceService } from './../../services/place-service/place.service';
import { Province } from './../../models/province.model';
import { PatientScheduleActions } from './../../state-management/actions/patient-schedule.action';
import { Store } from '@ngrx/store';
import { Hospital } from './../../models/hospital.model';
import { Observable } from 'rxjs';
import { HospitalService } from './../../services/hospital-service/hospital.service';
import {
  HospitalTime,
  HospitalTimeData,
} from './../../models/hospital-time.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss'],
})
export class HospitalListComponent implements OnInit {
  selectedValue = '';
  hospitalList$!: Observable<Hospital[]>;
  hospitalTime: HospitalTime[] = HospitalTimeData;
  provinceList!: Province[];
  provinceListLoading = false;
  provinceSeleted = null;

  constructor(
    private hospitalService: HospitalService,
    private store: Store,
    private router: Router,
    private placeService: PlaceService
  ) {}

  getHospitalList() {
    this.hospitalList$ = this.hospitalService.getAll();
    this.getProvince();
  }

  ngOnInit(): void {
    this.getHospitalList();
  }

  selectHospital(hospital: Hospital) {
    this.store.dispatch(
      PatientScheduleActions.selectHospitalAction({ hospital })
    );
    this.router.navigate(['../booking', 'step-2']);
  }

  getProvince() {
    this.placeService
      .getProvice()
      .subscribe((res) => (this.provinceList = res));
  }
}
