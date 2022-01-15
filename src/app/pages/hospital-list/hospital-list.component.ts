import { PatientScheduleActions } from './../../state-management/actions/patient-schedule.action';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Hospital } from './../../models/hospital.model';
import { Observable } from 'rxjs';
import { HospitalService } from './../../services/hospital-service/hospital.service';
import {
  HospitalTime,
  HospitalTimeData,
} from './../../models/hospital-time.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss'],
})
export class HospitalListComponent implements OnInit {
  hospitalList$!: Observable<Hospital[]>;

  hospitalTime: HospitalTime[] = HospitalTimeData;

  constructor(private hospitalService: HospitalService, private store: Store) {}

  getHospitalList() {
    this.hospitalList$ = this.hospitalService.getAll();
  }

  ngOnInit(): void {
    this.getHospitalList();
  }

  selectHospital(hospital: Hospital) {
    console.log(hospital);
    this.store.dispatch(
      PatientScheduleActions.selectHospitalAction({ hospital })
    );
  }
}
