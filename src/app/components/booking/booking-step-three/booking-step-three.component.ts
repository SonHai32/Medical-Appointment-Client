import { Router } from '@angular/router';
import { PatientScheduleActions } from './../../../state-management/actions/patient-schedule.action';
import { DatePipe } from '@angular/common';
import { mergeMap, map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { DoctorService } from './../../../services/doctor-service/doctor.service';
import { Doctor } from './../../../models/doctor.model';
import { Observable, combineLatest } from 'rxjs';
import { Shift } from './../../../models/shift.model';
import { Component, OnInit } from '@angular/core';
import { patientScheduleSeletors } from 'src/app/state-management/selectors/patient-schedule.selector';
import { NzMessageService } from 'ng-zorro-antd/message';

interface DoctorBooking extends Doctor {
  active: boolean;
}

@Component({
  selector: 'app-booking-step-three',
  templateUrl: './booking-step-three.component.html',
  styleUrls: ['./booking-step-three.component.scss'],
})
export class BookingStepThreeComponent implements OnInit {
  listDoctor$!: Observable<DoctorBooking[]>;
  btnNextStepLoading = false;

  listDoc: DoctorBooking[] = []

  timeSelected: string | null = null;
  doctorSelected: Doctor | null = null;

  getDataSeleted() {
    combineLatest(
      this.store.select(patientScheduleSeletors.patientScheduleTimeSelector),
      this.store.select(patientScheduleSeletors.doctorSelector)
    ).subscribe(([time, doctor]) => {
      this.timeSelected = time;
      this.doctorSelected = doctor;
    });
  }

  constructor(
    private doctorService: DoctorService,
    private store: Store,
    private datePipe: DatePipe,
    private router: Router,
    private nzMessageSercice: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getAllByHospitalAndSpecialist();
    this.getDataSeleted();
  }

  selectDoctorAndTime(
    doctor: Doctor,
    startAt: Date,
    endAt: Date,
    room: string
  ) {
    const time =
      this.datePipe.transform(startAt, 'hh:mm aaa') +
      ' - ' +
      this.datePipe.transform(endAt, 'hh:mm aaa');
    this.store.dispatch(
      PatientScheduleActions.selectDoctorAndTimeAction({ doctor, time, room })
    );
  }

  timeSplit(start: Date, end: Date, timeSplit: number = 30) {
    //handle issue getTime  fail
    start = new Date(start);
    end = new Date(end);
    //handle issue getTime  fail

    let av = Math.floor(
      (end.getTime() - start.getTime()) / (timeSplit * 60 * 1000)
    );
    let timeList: {
      start: Date;
      end: Date;
    }[] = [];
    let current: Date = start;

    for (let i = 1; i <= av; i++) {
      const dateObj = {
        start: current,
        end: new Date(current.getTime() + timeSplit * 60 * 1000),
      };
      current = dateObj.end;
      timeList.push(dateObj);
    }
    return timeList;
  }

  getAllByHospitalAndSpecialist() {
    this.listDoctor$ = this.store
      .select(patientScheduleSeletors.patientScheduleHospitalServiceSelector)
      .pipe(
        mergeMap((res) => {
          if (res) {
            return this.doctorService.getDoctorByHospitalAndSpecialist(
              res.hospital.id,
              res.specialist.id
            );
          } else {
            throw new Error('Missing service');
          }
        }),
        map((res) =>
          res.map(
            (val) =>
              ({
                ...val,
                shifts: val.shifts?.sort((x: Shift, y: Shift) => {
                  if (x.startAt < y.startAt) return -1;
                  if (x.startAt > y.startAt) return -0;
                  return 0;
                }),
                active: false,
              } as DoctorBooking)
          )
        ),
        mergeMap((data) =>
          this.store
            .select(patientScheduleSeletors.patientScheduleBookingDateSeletor)
            .pipe(
              map((date) => {
                if (date) {
                  return data.filter((val) =>
                    val.shifts?.some(
                      (shift) =>
                        new Date(shift.date).setHours(0, 0, 0, 0) ===
                        new Date(date).setHours(0, 0, 0, 0)
                    )
                  );
                } else throw new Error('Missing booking date');
              })
            )
        ),
        take(1)
      );
  }

  navigateNextStep() {
    if (this.doctorSelected && this.timeSelected) {
      this.store.dispatch(PatientScheduleActions.setPatientScheduleList());
      this.router.navigate(['/', 'booking', 'step-4']);
    } else {
      this.nzMessageSercice.warning('Bạn chưa lựa chọn bác sĩ và giờ khám!');
    }
  }
}
