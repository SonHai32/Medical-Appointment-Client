import { IconsProviderModule } from 'src/app/modules/core-modules/icons-provider.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { BookingStepThreeComponent } from './../../../components/booking/booking-step-three/booking-step-three.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BookingStepThreeComponent],
  imports: [
    CommonModule,
    NzTypographyModule,
    NzGridModule,
    NzButtonModule,
    IconsProviderModule,
    NzCollapseModule,
  ],
  exports: [BookingStepThreeComponent],
})
export class BookingStepThreeCompModule {}
