import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { HospitalListCompModule } from './../hospital-list-comp/hospital-list-comp.module';
import { HospitalComponent } from './../../../pages/hospital/hospital.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HospitalComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule,
  ],
  exports: [HospitalComponent],
})
export class HospitalCompModule {}
