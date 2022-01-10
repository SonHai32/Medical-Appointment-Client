import { Service } from './../../../models/service.model';
import { Component, OnInit } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'app-booking-step-two',
  templateUrl: './booking-step-two.component.html',
  styleUrls: ['./booking-step-two.component.scss'],
})
export class BookingStepTwoComponent implements OnInit {
  date = new Date();
  mode: NzCalendarMode = 'month';

  listService: Service[] = [];

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }
  constructor() {}

  ngOnInit(): void {}

  disableDate(current: Date) {
    return current < new Date();
  }

  data = [1, 2, 2, 22, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22];
}
