import { PatientScheduleState } from './../state/patient-schedule.state';
import { map } from 'rxjs/operators';
import { PatientScheduleActions } from './../actions/patient-schedule.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { LocalStoreService } from 'src/app/services/store-service/localstore.service';

@Injectable()
export class PatientScheduleEffect {
  constructor(private action$: Actions,private  localStorageService: LocalStoreService) {}

  // checkStorageEffect$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(PatientScheduleActions.checkPatientRecoredFromLocalStorage),
  //     map(() =>{
  //       const data = this.localStorageService.getFromStorage<PatientScheduleState>("PATIENT_SCHEDULE_STATE")

  //       return PatientScheduleActions.setPatientSchedule({data})
  //     })
  //   )
  // );
}
