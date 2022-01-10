import { MainPageSectionFourCompModule } from './../main-page-section-four-comp/main-page-section-four-comp.module';
import { MainPageSectionThreeCompModule } from './../main-page-section-three-comp/main-page-section-three-comp.module';
import { MainPageSectionTwoCompModule } from './../main-page-section-two-comp/main-page-section-two-comp.module';
import { MainPageSectionOneCompModule } from './../main-page-section-one-comp/main-page-section-one-comp.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from 'src/app/pages/main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    NzTypographyModule,
    NzButtonModule,
    NzGridModule,
    MainPageSectionOneCompModule,
    MainPageSectionTwoCompModule,
    MainPageSectionThreeCompModule,
    MainPageSectionFourCompModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageCompModule {}
