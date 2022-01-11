import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { IconsProviderModule } from '../../core-modules/icons-provider.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserComponent } from '../../../pages/user/user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzButtonModule,
    NzTypographyModule,
    NzGridModule,
    IconsProviderModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    NzMenuModule,
  ],
  exports: [UserComponent],
})
export class UserCompModule {}
