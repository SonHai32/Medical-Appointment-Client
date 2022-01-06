import { RegisterComponent } from './../../../pages/register/register.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from '../../core-modules/icons-provider.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
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
  exports: [RegisterComponent],
})
export class RegisterCompModule {}
