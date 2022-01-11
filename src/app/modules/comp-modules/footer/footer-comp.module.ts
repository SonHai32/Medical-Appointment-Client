import { IconsProviderModule } from './../../core-modules/icons-provider.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, NzGridModule, IconsProviderModule],
  exports: [FooterComponent],
})
export class FooterCompModule {}
