import { NzTableModule } from 'ng-zorro-antd/table';
import { IconsProviderModule } from './../../core-modules/icons-provider.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingStepFourComponent } from 'src/app/components/booking/booking-step-four/booking-step-four.component';

@NgModule({
  declarations: [BookingStepFourComponent],
  imports: [
    CommonModule,
    NzTypographyModule,
    NzButtonModule,
    NzGridModule,
    IconsProviderModule,
    NzTableModule,
  ],
  exports: [BookingStepFourComponent],
})
export class BookingStepFourCompModule {}
