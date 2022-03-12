import { PatientSchedule } from 'src/app/models/patient-schedule.model';
import { createReducer, on } from '@ngrx/store';
import { PatientScheduleActions } from '../actions/patient-schedule.action';
import { PatientScheduleState } from '../state/patient-schedule.state';
import { isEqual } from 'lodash';

const initializeState: PatientScheduleState = {
  mode: 'SINGLE',
  doctor: null,
  hospital: null,
  specialList: null,
  hospitalService: null,
  shift: null,
  room: null,
  bookingDate: null,
  time: null,
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
  })),
  on(
    PatientScheduleActions.selectPatientRecordAction,
    (state, { patientRecord }) => ({
      ...state,
      patientRecordSeleted: patientRecord,
    })
  ),
  on(PatientScheduleActions.checkPatientRecoredFromLocalStorage, (state) => ({
    ...state,
  })),
  on(PatientScheduleActions.setPatientScheduleList, (state) => {
    if (
      state.bookingDate &&
      state.doctor &&
      state.hospitalService &&
      state.patientRecordSeleted &&
      state.room &&
      state.time
    ) {
      console.log('true');
      const patientSchedule: PatientSchedule = {
        createdAt: new Date(),
        active: true,
        doctor: state.doctor,
        patientRecord: state.patientRecordSeleted,
        service: state.hospitalService,
        dateBooking: state.bookingDate,
        time: state.time,
        room: state.room,
      };

      let existedList = [...state.patientScheduleList];
      const isExisted = existedList.some((val) =>
        isEqual(val, patientSchedule)
      );

      if (isExisted) {
        return { ...state };
      }

      existedList.push(patientSchedule);

      return { ...state, patientScheduleList: existedList };
    }

    console.log('false');
    return { ...state };
  }),
  on(PatientScheduleActions.clearPatientScheduleList, (state) => ({
    ...state,
    patientScheduleList: [],
  })),
  on(
    PatientScheduleActions.removePatientScheduleItemAction,
    (state, { patientSchedule }) => {
      let existedPatientSchedule = state.patientScheduleList.filter(
        (val) => !isEqual(val, patientSchedule)
      );
      return { ...state, patientScheduleList: existedPatientSchedule };
    }
  ),
  on(
    PatientScheduleActions.selectHospitalServiceAction,
    (state, { hospitalService }) => ({ ...state, hospitalService })
  ),
  on(PatientScheduleActions.removeHospitalServiceAction, (state) => ({
    ...state,
    hospitalService: null,
  })),
  on(
    PatientScheduleActions.selectBookingDateAction,
    (state, { bookingDate }) => ({ ...state, bookingDate })
  ),
  on(PatientScheduleActions.removeHospitalServiceAction, (state) => ({
    ...state,
    bookingDate: null,
  })),
  on(
    PatientScheduleActions.selectDoctorAndTimeAction,
    (state, { doctor, time, room }) => ({ ...state, doctor, time, room })
  ),
  on(PatientScheduleActions.removeDoctorAndTime, (state) => ({
    ...state,
    doctor: null,
    time: null,
    room: null,
  })),
  on(PatientScheduleActions.selectMoreSpecialistAction, (state) => {
    return {
      ...state,
      doctor: null,
      bookingDate: null,
      hospitalService: null,
      room: null,
      time: null,
      mode: 'MULTIPLE',
    };
  })
);
