import { IconsProviderModule } from 'src/app/modules/core-modules/icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { PatientRecordComponent } from '../../../pages/patient-record/patient-record.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PatientRecordComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzTypographyModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    IconsProviderModule,
  ],
  exports: [PatientRecordComponent],
})
export class PatientRecordCompModule {}
