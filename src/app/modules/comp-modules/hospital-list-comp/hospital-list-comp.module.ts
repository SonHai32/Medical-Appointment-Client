import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { IconsProviderModule } from './../../core-modules/icons-provider.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RouterModule } from '@angular/router';
import { HospitalListComponent } from './../../../pages/hospital-list/hospital-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HospitalListComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzGridModule,
    IconsProviderModule,
    NzButtonModule,
    NzTypographyModule,
    NzCardModule,
    NzImageModule,
    NzTableModule,
  ],
  exports: [HospitalListComponent],
})
export class HospitalListCompModule {}
