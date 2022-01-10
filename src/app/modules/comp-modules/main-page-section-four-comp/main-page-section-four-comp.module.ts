import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MainPageSectionFourComponent } from './../../../components/main-page-section-four/main-page-section-four.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainPageSectionFourComponent],
  imports: [CommonModule, NzGridModule, NzTypographyModule, NzButtonModule],
  exports: [MainPageSectionFourComponent],
})
export class MainPageSectionFourCompModule {}
