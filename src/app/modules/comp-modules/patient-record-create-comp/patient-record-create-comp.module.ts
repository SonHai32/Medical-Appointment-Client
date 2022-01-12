import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { PatientRecordCompModule } from './../patient-record-comp/patient-record-comp.module';
import { PatientRecordCreateComponent } from './../../../pages/patient-record-create/patient-record-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PatientRecordCreateComponent],
  imports: [CommonModule, PatientRecordCompModule, NzTypographyModule],
  exports: [PatientRecordCreateComponent],
})
export class PatientRecordCreateCompModule {}
