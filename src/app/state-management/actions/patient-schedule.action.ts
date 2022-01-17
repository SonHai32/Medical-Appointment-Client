import { PatientScheduleState } from './../state/patient-schedule.state';
import { PatientRecord } from 'src/app/models/patient-record.model';
import { Hospital } from './../../models/hospital.model';
import { createAction, props } from '@ngrx/store';
export enum PatientScheduleActionTypes {
  CHECK_PATIENT_SCHEDULE_FROM_LOCAL_STORAGE = '[PATIENT_SCHEDULE] CHECK_PATIENT_SCHEDULE_FROM_LOCAL_STORAGE',
  SAVE_PATIENT_SCHEDULE_TO_LOCAL_STORAGE = '[PATIENT_SCHEDULE] SAVE_PATIENT_SCHEDULE_TO_LOCAL_STORAGE',
  SET_PATIENT_SCHEDULE = '[PATIENT_SCHEDULE] SET_PATIENT_SCHEDULE',
  CLEAR_PATIENT_SCHEDULE = '[PATIENT_SCHEDULE] CLEAR_PATIENT_SCHEDULE',
  SELECT_HOSPITAL = '[PATIENT_SCHEDULE] SELECT_HOSPITAL',
  REMOVE_HOSPITAL = '[PATIENT_SCHEDULE] REMOVE_HOSPITAL',
  SELECT_PATIENT_RECORD = '[PATIENT_SCHEDULE] SELECT_PATIENT_RECORD',
}

export const selectHospitalAction = createAction(
  PatientScheduleActionTypes.SELECT_HOSPITAL,
  props<{ hospital: Hospital }>()
);

export const removeHospitalAction = createAction(
  PatientScheduleActionTypes.REMOVE_HOSPITAL
);

export const selectPatientRecordAction = createAction(
  PatientScheduleActionTypes.SELECT_PATIENT_RECORD,
  props<{ patientRecord: PatientRecord }>()
);

export const checkPatientRecoredFromLocalStorage = createAction(
  PatientScheduleActionTypes.CHECK_PATIENT_SCHEDULE_FROM_LOCAL_STORAGE
);

export const setPatientSchedule = createAction(
  PatientScheduleActionTypes.SET_PATIENT_SCHEDULE,
  props<{ data: PatientScheduleState }>()
);

export const clearPatientSchedule = createAction(
  PatientScheduleActionTypes.CLEAR_PATIENT_SCHEDULE
);

export const PatientScheduleActions = {
  selectHospitalAction,
  removeHospitalAction,
  selectPatientRecordAction,
  setPatientSchedule,
  checkPatientRecoredFromLocalStorage,
};
