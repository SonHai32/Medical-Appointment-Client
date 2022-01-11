import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from 'src/app/pages/booking/booking.component';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzGridModule,
    NzTypographyModule,
    NzIconModule,
    NzButtonModule,
    NzStepsModule,
  ],
  exports: [BookingComponent],
})
export class BookingCompModule {}
