import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconsProviderModule } from 'src/app/modules/core-modules/icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ChangePasswordComponent } from './../../../pages/change-password/change-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzTypographyModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    IconsProviderModule,
    NzButtonModule,
  ],
  exports: [ChangePasswordComponent],
})
export class ChangePasswordCompModule {}
