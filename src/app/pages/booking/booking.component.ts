import { patientScheduleTimeSelector } from './../../state-management/selectors/patient-schedule.selector';
import { Specialist } from './../../models/specialist.model';
import { PatientRecord } from 'src/app/models/patient-record.model';
import { Store } from '@ngrx/store';
import { Doctor } from './../../models/doctor.model';
import { HospitalService } from './../../models/hospital-service.model';
import { Hospital } from './../../models/hospital.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { patientScheduleSeletors } from 'src/app/state-management/selectors/patient-schedule.selector';
import { PatientSchedule } from 'src/app/models/patient-schedule.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  patientRecoredSelected$!: Observable<PatientRecord | null>;
  hospitalSelected$!: Observable<Hospital | null>;
  bookingDateSelected$!: Observable<Date | null>;
  hospitalServiceSelected$!: Observable<HospitalService | null>;
  doctorSelected$!: Observable<Doctor | null>;
  specialistSelected$!: Observable<Specialist | null>;
  timeSelected$!: Observable<string | null>;
  roomSelected$!: Observable<string | null>;
  patientScheduleMode$!: Observable<'SINGLE' | 'MULTIPLE'>;
  patientScheduleList$!: Observable<PatientSchedule[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initPatientScheduleListner();
  }

  initPatientScheduleListner() {
    this.hospitalSelected$ = this.store.select(
      patientScheduleSeletors.hospitalSelector
    );

    this.hospitalServiceSelected$ = this.store.select(
      patientScheduleSeletors.patientScheduleHospitalServiceSelector
    );

    this.doctorSelected$ = this.store.select(
      patientScheduleSeletors.doctorSelector
    );

    this.bookingDateSelected$ = this.store.select(
      patientScheduleSeletors.patientScheduleBookingDateSeletor
    );

    this.patientRecoredSelected$ = this.store.select(
      patientScheduleSeletors.patientRecordSelector
    );

    this.specialistSelected$ = this.store.select(
      patientScheduleSeletors.patientScheduleSpecialistSelector
    );

    this.timeSelected$ = this.store.select(
      patientScheduleSeletors.patientScheduleTimeSelector
    );

    this.roomSelected$ = this.store.select(
      patientScheduleSeletors.patientScheduleRoomSelector
    );

    this.patientScheduleMode$ = this.store.select(
      patientScheduleSeletors.patientScheduleModeSelector
    );

    this.patientScheduleList$ = this.store.select(
      patientScheduleSeletors.patientScheduleListSelector
    );
  }
}
