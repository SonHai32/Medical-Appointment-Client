import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { UserFeedbackComponent } from './../../../pages/user-feedback/user-feedback.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserFeedbackComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [UserFeedbackComponent],
})
export class UserFeedbackCompModule {}
