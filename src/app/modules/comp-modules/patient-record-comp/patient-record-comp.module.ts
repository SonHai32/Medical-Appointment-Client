import { IconsProviderModule } from 'src/app/modules/core-modules/icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { PatientRecordComponent } from '../../../pages/patient-record/patient-record.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';

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
    NzDatePickerModule,
    NzSelectModule,
  ],
  exports: [PatientRecordComponent],
})
export class PatientRecordCompModule {}
