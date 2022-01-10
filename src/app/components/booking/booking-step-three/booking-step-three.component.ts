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
      endAt: new Date(2021, 12, 23, 11, 0),
      startAt: new Date(2021, 12, 23, 7, 0),
      id: '1',
      name: 'Ca sáng',
      room: {
        name: 'dasdsa',
        id: 'eqwe',
      },
    },
    {
      active: true,
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
      endAt: new Date(2021, 12, 23, 11, 0),
      startAt: new Date(2021, 12, 23, 7, 0),
      id: '1',
      name: 'Ca sáng',
      room: {
        name: 'dasdsa',
        id: 'eqwe',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log(
      this.timeSplit(
        new Date(2021, 12, 23, 7, 0),
        new Date(2021, 12, 23, 11, 0)
      )
    );
  }
  timeSplit(start: Date, end: Date, timeSplit: number = 30) {
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
}
