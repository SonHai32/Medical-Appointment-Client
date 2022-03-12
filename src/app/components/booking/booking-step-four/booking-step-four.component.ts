import { Router } from '@angular/router';
import {
  PatientScheduleActions,
  selectMoreSpecialistAction,
} from './../../../state-management/actions/patient-schedule.action';
import { PatientRecord } from './../../../models/patient-record.model';
import { Observable } from 'rxjs';
import { AcademicRank } from './../../../models/academic-rank.model';
import { NzMessageService } from 'ng-zorro-antd/message';
import { patientScheduleSeletors } from 'src/app/state-management/selectors/patient-schedule.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { PatientSchedule } from 'src/app/models/patient-schedule.model';

interface patientScheduleVM {}
@Component({
  selector: 'app-booking-step-four',
  templateUrl: './booking-step-four.component.html',
  styleUrls: ['./booking-step-four.component.scss'],
})
export class BookingStepFourComponent implements OnInit {
  patientScheduleList!: PatientSchedule[];
  patientScheduleListLoading = false;

  patientRecord$!: Observable<PatientRecord | null>;

  constructor(
    private store: Store,
    private nzMessageService: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPatientScheduleListFromStore();
    this.getCurrentPatientRecordFromStore();
  }

  getCurrentPatientRecordFromStore() {
    this.patientRecord$ = this.store.select(
      patientScheduleSeletors.patientRecordSelector
    );
  }

  getPatientScheduleListFromStore() {
    this.patientScheduleListLoading = true;
    this.store
      .select(patientScheduleSeletors.patientScheduleListSelector)
      .subscribe(
        (val) => {
          if (val) {
            this.patientScheduleList = val;
          }
        },
        (error) => this.nzMessageService.error(error),
        () => (this.patientScheduleListLoading = true)
      );
  }

  getAcademicRankName(academicRank: AcademicRank[]) {
    return academicRank.map((val) => val.shortname).join('.');
  }

  onAddMoreSpecilstBtn() {
    this.store.dispatch(PatientScheduleActions.selectMoreSpecialistAction());
    this.router.navigate(['/booking', 'step-2']);
  }

  navigateNextStep() {
    this.router.navigate(['../booking', 'step-5']);
  }
}
