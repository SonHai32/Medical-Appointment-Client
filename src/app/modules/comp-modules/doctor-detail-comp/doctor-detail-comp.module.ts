import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { IconsProviderModule } from 'src/app/modules/core-modules/icons-provider.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDetailComponent } from 'src/app/pages/doctor-detail/doctor-detail.component';

@NgModule({
  declarations: [DoctorDetailComponent],
  imports: [
    CommonModule,
    NzGridModule,
    RouterModule,
    NzTypographyModule,
    NzButtonModule,
    IconsProviderModule,
    NzAvatarModule,
  ],
  exports: [DoctorDetailComponent],
})
export class DoctorDetailCompModule {}
