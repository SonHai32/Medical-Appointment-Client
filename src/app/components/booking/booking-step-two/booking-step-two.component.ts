import { Router } from '@angular/router';
import { PatientScheduleActions } from './../../../state-management/actions/patient-schedule.action';
import { mergeMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HospitalServiceService } from './../../../services/hospital-service-service/hospital-service.service';
import { Service } from './../../../models/service.model';
import { Component, OnInit } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';
import { HospitalService } from 'src/app/models/hospital-service.model';
import {
  patientScheduleSelector,
  patientScheduleSeletors,
} from 'src/app/state-management/selectors/patient-schedule.selector';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-booking-step-two',
  templateUrl: './booking-step-two.component.html',
  styleUrls: ['./booking-step-two.component.scss'],
})
export class BookingStepTwoComponent implements OnInit {
  bookingDate = new Date();
  mode: NzCalendarMode = 'month';

  listService!: Observable<HospitalService[]>;

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }
  constructor(
    private hospitalServiceService: HospitalServiceService,
    private store: Store,
    private router: Router
  ) {}

  hospitalServiceList!: Observable<HospitalService[]>;
  ngOnInit(): void {
    this.getHospitalServiceList();
  }

  disableDate(current: Date) {
    return current < new Date();
  }

  getHospitalServiceList() {
    // this.hospitalServiceList = this.hospitalServiceService.get();
    this.listService = this.store
      .select(patientScheduleSeletors.hospitalSelector)
      .pipe(
        mergeMap((res) => {
          if (res) {
            return this.hospitalServiceService.getAllByHospital(res.id);
          } else {
            throw new Error('Missing Hospital');
          }
        }),
        tap((res) => console.log(res))
      );
  }

  onHospitalServiceSelect(hospitalService: HospitalService) {
    this.store.dispatch(
      PatientScheduleActions.selectHospitalServiceAction({ hospitalService })
    );
  }

  onDateSelectChange() {
    console.log(this.bookingDate);
    this.store.dispatch(
      PatientScheduleActions.selectBookingDateAction({
        bookingDate: this.bookingDate,
      })
    );
  }
}
