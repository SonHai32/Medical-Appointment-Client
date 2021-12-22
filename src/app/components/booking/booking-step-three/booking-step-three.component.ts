import { Shift } from './../../../models/shift.model';
import { Component, OnInit } from '@angular/core';

interface ShiftBooking extends Shift {
  active: boolean;
}

@Component({
  selector: 'app-booking-step-three',
  templateUrl: './booking-step-three.component.html',
  styleUrls: ['./booking-step-three.component.scss'],
})
export class BookingStepThreeComponent implements OnInit {
  shiftList: ShiftBooking[] = [
    {
      active: false,
      date: new Date(),
      doctor: {
        academicRank: [{ fullname: 'Tiến sĩ', id: '1', shortname: 'TS' }],
        birthday: new Date(),
        emailAddress: 'asdsad',
        firstname: 'Hai',
        middlename: 'Lam',
        lastname: 'Son',
        gender: { id: 1, name: 'nam' },
        phoneNumber: '321321312',
        id: '1',
        startAt: new Date(),
      },
      endAt: new Date(),
      startAt: new Date(),
      id: '1',
      name: 'Ca sáng',
      room: {
        name: 'dasdsa',
        id: 'eqwe',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
