import { FormsModule } from '@angular/forms';
import { BookingStepFiveComponent } from './../../../components/booking/booking-step-five/booking-step-five.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { IconsProviderModule } from '../../core-modules/icons-provider.module';

@NgModule({
  declarations: [BookingStepFiveComponent],
  imports: [
    CommonModule,
    NzTypographyModule,
    NzButtonModule,
    NzGridModule,
    IconsProviderModule,
    FormsModule,
  ],
  exports: [BookingStepFiveComponent],
})
export class BookingStepFiveCompModule {}
