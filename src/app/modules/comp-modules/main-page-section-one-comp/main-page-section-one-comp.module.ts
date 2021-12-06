import { MainPageSectionOneComponent } from './../../../components/main-page-section-one/main-page-section-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [MainPageSectionOneComponent],
  imports: [CommonModule, NzTypographyModule, NzButtonModule, NzGridModule],
  exports: [MainPageSectionOneComponent],
})
export class MainPageSectionOneCompModule {}
