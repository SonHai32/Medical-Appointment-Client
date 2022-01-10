import { BookingStepFourComponent } from 'src/app/components/booking/booking-step-four/booking-step-four.component';
import { BookingStepThreeComponent } from './../components/booking/booking-step-three/booking-step-three.component';
import { BookingStepTwoComponent } from './../components/booking/booking-step-two/booking-step-two.component';
import { BookingComponent } from 'src/app/pages/booking/booking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingStepFiveComponent } from '../components/booking/booking-step-five/booking-step-five.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [
      {
        path: 'step-2',
        component: BookingStepTwoComponent,
      },
      {
        path: 'step-3',
        component: BookingStepThreeComponent,
      },
      {
        path: 'step-4',
        component: BookingStepFourComponent,
      },
      {
        path: 'step-5',
        component: BookingStepFiveComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
