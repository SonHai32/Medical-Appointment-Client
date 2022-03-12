import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { IconsProviderModule } from 'src/app/modules/core-modules/icons-provider.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzGridModule,
    NzAvatarModule,
    NzTypographyModule,
    IconsProviderModule,
    NzButtonModule,
    NzAffixModule,
    NzDropDownModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderCompModule {}
