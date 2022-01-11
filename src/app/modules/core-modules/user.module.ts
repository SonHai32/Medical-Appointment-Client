import { PatientRecordListCompModule } from './../comp-modules/patient-record-list-comp/patient-record-list-comp.module';
import { UserFeedbackCompModule } from './../comp-modules/user-feedback-comp/user-feedback-comp.module';
import { UserInfoCompModule } from './../comp-modules/user-info-comp/user-info-comp.module';
import { UserCompModule } from '../comp-modules/user-comp/user-comp.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from '../../routings/user-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserCompModule,
    UserInfoCompModule,
    UserFeedbackCompModule,
    PatientRecordListCompModule,
  ],
})
export class UserModule {}
