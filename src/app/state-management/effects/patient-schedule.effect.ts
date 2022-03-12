import { PatientScheduleState } from './../state/patient-schedule.state';
import { map, tap } from 'rxjs/operators';
import { PatientScheduleActions } from './../actions/patient-schedule.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { LocalStoreService } from 'src/app/services/store-service/localstore.service';
import { Store } from '@ngrx/store';
import { patientScheduleSelector } from '../selectors/patient-schedule.selector';

@Injectable()
export class PatientScheduleEffect {
  constructor(
    private action$: Actions,
    private localStorageService: LocalStoreService,
    private store: Store
  ) {}

  // checkStorageEffect$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(PatientScheduleActions.checkPatientRecoredFromLocalStorage),
  //     map(() => {
  //       const data =
  //         this.localStorageService.getFromStorage<PatientScheduleState>(
  //           'PATIENT_SCHEDULE_STATE'
  //         );
  //       if (data) {
  //         return PatientScheduleActions.setPatientSchedule({ data });
  //       } else {
  //         return PatientScheduleActions.clearPatientSchedule();
  //       }
  //     })
  //   )
  // );

  // selectHospitalEffect$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(PatientScheduleActions.selectHospitalAction),
  //     tap(async () => {
  //       const data = await this.store
  //         .select(patientScheduleSelector)
  //         .toPromise();
  //       this.localStorageService.saveToStorage<PatientScheduleState>(
  //         'patient-schedule',
  //         data
  //       );
  //     })
  //   )
  // );

  // selectPatientRecordEffect$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(PatientScheduleActions.selectPatientRecordAction),
  //     tap(async () => {
  //       const data = await this.store
  //         .select(patientScheduleSelector)
  //         .toPromise();
  //       this.localStorageService.saveToStorage<PatientScheduleState>(
  //         'patient-schedule',
  //         data
  //       );
  //     })
  //   )
  // );

  // selectDoctorAndTimeEffect$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(PatientScheduleActions.selectDoctorAndTimeAction),
  //     map(() => PatientScheduleActions.setPatientScheduleList())
  //   )
  // );
}
