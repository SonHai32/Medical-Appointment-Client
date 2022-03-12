import { PatientScheduleComponent } from 'src/app/pages/patient-schedule/patient-schedule.component';
import { ChangePasswordComponent } from './../pages/change-password/change-password.component';
import { PatientRecordCreateComponent } from './../pages/patient-record-create/patient-record-create.component';
import { PatientRecordListComponent } from './../pages/patient-record-list/patient-record-list.component';
import { PatientRecordComponent } from './../pages/patient-record/patient-record.component';
import { UserFeedbackComponent } from './../pages/user-feedback/user-feedback.component';
import { UserInfoComponent } from './../pages/user-info/user-info.component';
import { UserComponent } from './../pages/user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full',
      },
      {
        path: 'info',
        component: UserInfoComponent,
      },
      {
        path: 'feedback',
        component: UserFeedbackComponent,
      },
      {
        path: 'patient-records',
        component: PatientRecordListComponent,
      },
      {
        path: 'new-patient-record',
        component: PatientRecordCreateComponent,
      },
      { path: 'change-password', component: ChangePasswordComponent },
      {
        path: 'patient-schedule', component: PatientScheduleComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
