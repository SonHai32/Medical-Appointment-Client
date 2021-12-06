import { IconsProviderModule } from './../../core-modules/icons-provider.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { MainPageSectionTwoComponent } from './../../../components/main-page-section-two/main-page-section-two.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainPageSectionTwoComponent],
  imports: [CommonModule, NzTypographyModule, NzButtonModule, NzGridModule, IconsProviderModule],
  exports: [MainPageSectionTwoComponent],
})
export class MainPageSectionTwoCompModule {}
