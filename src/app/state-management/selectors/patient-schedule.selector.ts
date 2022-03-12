import { PatientScheduleState } from './../state/patient-schedule.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
const featureSelector =
  createFeatureSelector<PatientScheduleState>('patientSchedule');

export const patientScheduleSelector = createSelector(
  featureSelector,
  (state) => state
);

export const doctorSelector = createSelector(
  featureSelector,
  (state) => state.doctor
);

export const hospitalSelector = createSelector(
  featureSelector,
  (state) => state.hospital
);

export const patientRecordSelector = createSelector(
  featureSelector,
  (state) => state.patientRecordSeleted
);

export const patientScheduleListSelector = createSelector(
  featureSelector,
  (state) => state.patientScheduleList
);

export const patientScheduleHospitalServiceSelector = createSelector(
  featureSelector,
  (state) => state.hospitalService
);

export const patientScheduleBookingDateSeletor = createSelector(
  featureSelector,
  (state) => state.bookingDate
);

export const patientScheduleDoctorSelector = createSelector(
  featureSelector,
  (state) => state.doctor
);

export const patientScheduleTimeSelector = createSelector(
  featureSelector,
  (state) => state.time
);

export const patientScheduleRoomSelector = createSelector(
  featureSelector,
  (state) => state.room
);

export const patientScheduleSpecialistSelector = createSelector(
  featureSelector,
  (state) => state.specialList
);

export const patientScheduleModeSelector = createSelector(
  featureSelector,
  (state) => state.mode
);

export const patientScheduleSeletors = {
  patientScheduleSelector,
  doctorSelector,
  hospitalSelector,
  patientRecordSelector,
  patientScheduleListSelector,
  patientScheduleHospitalServiceSelector,
  patientScheduleBookingDateSeletor,
  patientScheduleSpecialistSelector,
  patientScheduleTimeSelector,
  patientScheduleRoomSelector,
  patientScheduleModeSelector,
};
