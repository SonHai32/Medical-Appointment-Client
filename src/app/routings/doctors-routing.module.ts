import { DoctorListComponent } from './../pages/doctor-list/doctor-list.component';
import { DoctorsComponent } from './../pages/doctors/doctors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailComponent } from '../pages/doctor-detail/doctor-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent,
    children: [
      {
        path: '',
        component: DoctorListComponent,
      },
      {
        path: ':id',
        component: DoctorDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
