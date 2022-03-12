import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientScheduleComponent } from 'src/app/pages/patient-schedule/patient-schedule.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { IconsProviderModule } from '../core-modules/icons-provider.module';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [PatientScheduleComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzButtonModule,
    NzTypographyModule,
    IconsProviderModule,
    NzCollapseModule,
    NzAvatarModule,
  ],
  exports: [PatientScheduleComponent],
})
export class PatientScheduleCompModule {}
