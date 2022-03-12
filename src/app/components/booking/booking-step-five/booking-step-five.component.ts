import { HttpErrorResponse } from '@angular/common/http';
import { PatientScheduleService } from './../../../services/patient-schedule-service/patient-schedule.service';
import { AcademicRank } from './../../../models/academic-rank.model';
import { NzMessageService } from 'ng-zorro-antd/message';
import { patientScheduleSeletors } from 'src/app/state-management/selectors/patient-schedule.selector';
import { Store } from '@ngrx/store';
import { PatientSchedule } from './../../../models/patient-schedule.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-step-five',
  templateUrl: './booking-step-five.component.html',
  styleUrls: ['./booking-step-five.component.scss'],
})
export class BookingStepFiveComponent implements OnInit {
  radioValue = 'A';

  patientScheduleList!: PatientSchedule[];
  constructor(
    private store: Store,
    private patientScheduleService: PatientScheduleService,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getPatientScheduleFromStore();
  }

  getPatientScheduleFromStore() {
    this.store
      .select(patientScheduleSeletors.patientScheduleListSelector)
      .subscribe(
        (val) => (this.patientScheduleList = val),
        (error) => this.nzMessageService.error(error),
        () => console.log('complete')
      );
  }

  getAcademicRank(academicRank: AcademicRank[]) {
    return academicRank.map((val) => val.shortname).join('.');
  }

  getPrice() {
    return this.patientScheduleList
      .map((val) => val.service.price)
      .reduce((pre, curr) => pre + curr);
  }

  onPayment() {
    if (this.patientScheduleList && this.patientScheduleList.length > 0) {
      this.patientScheduleService
        .addNewPatientSchedule(this.patientScheduleList)
        .subscribe(
          (res) => this.nzMessageService.success(res.message),
          (error) =>
            this.nzMessageService.error((error as HttpErrorResponse).error)
        );
    }
  }
}
