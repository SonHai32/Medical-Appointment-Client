import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { InfoComponent } from './../../../pages/info/info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    NzTypographyModule,
    NzGridModule,
    NzButtonModule,
    NzButtonModule,
  ],
  exports: [InfoComponent],
})
export class InfoCompModule {}
