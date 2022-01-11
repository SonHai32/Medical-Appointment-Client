import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { PatientRecordListComponent } from './../../../pages/patient-record-list/patient-record-list.component';
import { IconsProviderModule } from 'src/app/modules/core-modules/icons-provider.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgModule } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { CommonModule } from '@angular/common';
import { PatientRecordCompModule } from '../patient-record-comp/patient-record-comp.module';

@NgModule({
  declarations: [PatientRecordListComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzButtonModule,
    NzTypographyModule,
    IconsProviderModule,
    NzCollapseModule,
    NzAvatarModule,
    PatientRecordCompModule,
  ],
  exports: [PatientRecordListComponent],
})
export class PatientRecordListCompModule {}
