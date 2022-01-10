import { IconsProviderModule } from 'src/app/modules/core-modules/icons-provider.module';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { DoctorListComponent } from './../../../pages/doctor-list/doctor-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DoctorListComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzTypographyModule,
    NzButtonModule,
    RouterModule,
    NzAvatarModule,
    IconsProviderModule,
    NzDividerModule,
  ],
  exports: [DoctorListComponent],
})
export class DoctorListCompModule {}
