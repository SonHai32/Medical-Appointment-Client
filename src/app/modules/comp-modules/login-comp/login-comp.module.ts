import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { LoginComponent } from './../../../pages/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from '../../core-modules/icons-provider.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzGridModule,
    NzTypographyModule,
    NzInputModule,
    IconsProviderModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
  ],
  exports: [LoginComponent],
})
export class LoginCompModule {}
