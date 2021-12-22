import { BookingStepThreeComponent } from './../components/booking/booking-step-three/booking-step-three.component';
import { BookingStepTwoComponent } from './../components/booking/booking-step-two/booking-step-two.component';
import { BookingComponent } from 'src/app/pages/booking/booking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
