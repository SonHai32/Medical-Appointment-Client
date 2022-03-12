import { PatientSchedule } from 'src/app/models/patient-schedule.model';
import { Doctor } from './../../models/doctor.model';
import { HospitalService } from 'src/app/models/hospital-service.model';
import { PatientScheduleState } from './../state/patient-schedule.state';
import { PatientRecord } from 'src/app/models/patient-record.model';
import { Hospital } from './../../models/hospital.model';
import { createAction, props } from '@ngrx/store';
export enum PatientScheduleActionTypes {
  CHECK_PATIENT_SCHEDULE_FROM_LOCAL_STORAGE = '[PATIENT_SCHEDULE] CHECK_PATIENT_SCHEDULE_FROM_LOCAL_STORAGE',
  SAVE_PATIENT_SCHEDULE_TO_LOCAL_STORAGE = '[PATIENT_SCHEDULE] SAVE_PATIENT_SCHEDULE_TO_LOCAL_STORAGE',
  REMOVE_PATIENT_SCHEDULE_ITEM = '[PATIENT_SCHEDULE] REMOVE_PATIENT_SCHEDULE_ITEM',
  SET_PATIENT_SCHEDULE_LIST = '[PATIENT_SCHEDULE] SET_PATIENT_SCHEDULE_LIST',
  CLEAR_PATIENT_SCHEDULE_LIST = '[PATIENT_SCHEDULE] CLEAR_PATIENT_SCHEDULE_LIST',
  SELECT_HOSPITAL = '[PATIENT_SCHEDULE] SELECT_HOSPITAL',
  REMOVE_HOSPITAL = '[PATIENT_SCHEDULE] REMOVE_HOSPITAL',
  SELECT_PATIENT_RECORD = '[PATIENT_SCHEDULE] SELECT_PATIENT_RECORD',
  SELECT_HOSPITAL_SERVICE = '[PATIENT_SCHEDULE] SELECT_HOSPITAL_SERVICE',
  REMOVE_HOSPITAL_SERVICE = '[PATIENT_SCHEDULE] REMOVE_HOSPITAL_SERVICE',
  SELECT_BOOKING_DATE = '[PATIENT_SCHEDULE] SELECT_BOOKING_DATE',
  REMOVE_BOOKING_DATE = '[PATIENT_SCHEDULE] REMOVE_BOOKING_DATE',
  SELECT_DOCTOR_AND_TIME = '[PATIENT_SCHEDULE] SELECT_DOCTOR_AND_TIME',
  REMOVE_DOCTOR_AND_TIME = '[PATIENT_SCHEDULE] REMOVE_DOCTOR_AND_TIME',
  SELECT_MORE_SPECIALIST = '[PATIENT_SCHEDULE] SELECT_MORE_SPECIALIST',
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

export const setPatientScheduleList = createAction(
  PatientScheduleActionTypes.SET_PATIENT_SCHEDULE_LIST
);

export const clearPatientScheduleList = createAction(
  PatientScheduleActionTypes.CLEAR_PATIENT_SCHEDULE_LIST
);

export const selectHospitalServiceAction = createAction(
  PatientScheduleActionTypes.SELECT_HOSPITAL_SERVICE,
  props<{ hospitalService: HospitalService }>()
);

export const removeHospitalServiceAction = createAction(
  PatientScheduleActionTypes.REMOVE_HOSPITAL_SERVICE
);

export const selectBookingDateAction = createAction(
  PatientScheduleActionTypes.SELECT_BOOKING_DATE,
  props<{ bookingDate: Date }>()
);

export const removeBookingDate = createAction(
  PatientScheduleActionTypes.REMOVE_BOOKING_DATE
);

export const selectDoctorAndTimeAction = createAction(
  PatientScheduleActionTypes.SELECT_DOCTOR_AND_TIME,
  props<{ doctor: Doctor; time: string; room: string }>()
);

export const removeDoctorAndTime = createAction(
  PatientScheduleActionTypes.REMOVE_DOCTOR_AND_TIME
);

export const removePatientScheduleItemAction = createAction(
  PatientScheduleActionTypes.REMOVE_PATIENT_SCHEDULE_ITEM,
  props<{ patientSchedule: PatientSchedule }>()
);

export const selectMoreSpecialistAction = createAction(
  PatientScheduleActionTypes.SELECT_MORE_SPECIALIST
);

export const PatientScheduleActions = {
  selectHospitalAction,
  removeHospitalAction,
  selectPatientRecordAction,
  setPatientScheduleList,
  clearPatientScheduleList,
  checkPatientRecoredFromLocalStorage,
  selectHospitalServiceAction,
  removeHospitalServiceAction,
  selectBookingDateAction,
  removeBookingDate,
  selectDoctorAndTimeAction,
  removeDoctorAndTime,
  removePatientScheduleItemAction,
  selectMoreSpecialistAction,
};
