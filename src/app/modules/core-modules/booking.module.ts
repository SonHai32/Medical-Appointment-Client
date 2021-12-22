import { BookingStepThreeCompModule } from './../comp-modules/booking-step-three-comp/booking-step-three-comp.module';
import { BookingStepTwoCompModule } from './../comp-modules/booking-step-two-comp/booking-step-two-comp.module';
import { BookingCompModule } from './../comp-modules/booking-comp/booking-comp.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from '../../routings/booking-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookingRoutingModule,
    BookingCompModule,
    BookingStepTwoCompModule,
    BookingStepThreeCompModule,
  ],
})
export class BookingModule {}
