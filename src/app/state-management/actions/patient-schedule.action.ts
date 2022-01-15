import { Hospital } from './../../models/hospital.model';
import { createAction, props } from '@ngrx/store';
export enum PatientScheduleActionTypes {
  SELECT_HOSPITAL = '[PATIENT_SCHEDULE] SELECT_HOSPITAL',
  REMOVE_HOSPITAL = '[PATIENT_SCHEDULE] REMOVE_HOSPITAL',
}

export const selectHospitalAction = createAction(
  PatientScheduleActionTypes.SELECT_HOSPITAL,
  props<{ hospital: Hospital }>()
);

export const removeHospitalAction = createAction(
  PatientScheduleActionTypes.REMOVE_HOSPITAL
);

export const PatientScheduleActions = {
  selectHospitalAction,
  removeHospitalAction,
};
