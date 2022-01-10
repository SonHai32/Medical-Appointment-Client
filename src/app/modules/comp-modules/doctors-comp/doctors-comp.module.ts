import { RouterModule } from '@angular/router';
import { DoctorsComponent } from './../../../pages/doctors/doctors.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DoctorsComponent],
  imports: [CommonModule, RouterModule],
  exports: [DoctorsComponent],
})
export class DoctorsCompModule {}
