import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { UserInfoComponent } from './../../../pages/user-info/user-info.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IconsProviderModule } from '../../core-modules/icons-provider.module';

@NgModule({
  providers: [DatePipe],
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzTypographyModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    IconsProviderModule,
  ],
  exports: [UserInfoComponent],
})
export class UserInfoCompModule {}
