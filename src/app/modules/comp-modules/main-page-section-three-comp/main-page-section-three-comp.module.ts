import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MainPageSectionThreeComponent } from './../../../components/main-page-section-three/main-page-section-three.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainPageSectionThreeComponent],
  imports: [CommonModule, NzGridModule, NzTypographyModule, NzButtonModule],
  exports: [MainPageSectionThreeComponent],
})
export class MainPageSectionThreeCompModule {}
