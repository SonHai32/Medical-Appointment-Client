import { createReducer, on } from '@ngrx/store';
import { PatientScheduleActions } from '../actions/patient-schedule.action';
import { PatientScheduleState } from '../state/patient-schedule.state';

const initializeState: PatientScheduleState = {
  doctor: null,
  hospital: null,
  specialList: null,
  shift: null,
  patientRecordSeleted: null,
  patientScheduleList: [],
};

export const patientScheduleReducer = createReducer(
  initializeState,
  on(PatientScheduleActions.selectHospitalAction, (state, { hospital }) => {
    return { ...state, hospital };
  }),
  on(PatientScheduleActions.removeHospitalAction, (state) => ({
    ...state,
    hospital: null,
    doctor: null,
    shift: null,
    specialList: null,
  }))
);
