import { DoctorDetailCompModule } from './../comp-modules/doctor-detail-comp/doctor-detail-comp.module';
import { DoctorListCompModule } from './../comp-modules/doctor-list-comp/doctor-list-comp.module';
import { DoctorsCompModule } from './../comp-modules/doctors-comp/doctors-comp.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from '../../routings/doctors-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    DoctorsCompModule,
    DoctorListCompModule,
    DoctorDetailCompModule,
  ],
})
export class DoctorsModule {}
