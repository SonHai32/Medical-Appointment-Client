import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { BookingStepTwoComponent } from './../../../components/booking/booking-step-two/booking-step-two.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IconsProviderModule } from '../../core-modules/icons-provider.module';

@NgModule({
  declarations: [BookingStepTwoComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzTypographyModule,
    NzCalendarModule,
    IconsProviderModule,
    NzButtonModule,
    FormsModule,
    NzInputModule,
    ScrollingModule,
    NzListModule,
  ],
  exports: [BookingStepTwoComponent],
})
export class BookingStepTwoCompModule {}
