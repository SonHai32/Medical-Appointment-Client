import { map, tap } from 'rxjs/operators';
import { PatientSchedule } from './../../models/patient-schedule.model';
import { UserService } from 'src/app/services/user-service/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Observable } from 'rxjs';
import { arraysEqual } from 'ng-zorro-antd/core/util';

@Component({
  selector: 'app-patient-schedule',
  templateUrl: './patient-schedule.component.html',
  styleUrls: ['./patient-schedule.component.scss'],
})
export class PatientScheduleComponent implements OnInit {
  constructor(private authService: AuthService) {}

  patientScheduleList$!: Observable<PatientSchedule[] | undefined>;

  ngOnInit(): void {
    this.getPatientScheduleList();
  }

  getPatientScheduleList() {
    this.patientScheduleList$ = this.authService.getAuthUser().pipe(
      map((res) => {
        if (res.patientRecord) {
          return res.patientRecord.map((val) => val.patientSchedule);
        }
        return [];
      }),
      map((res) => res.reduce((p, c) => p?.concat(c ?? []))),
      tap((res) => console.log(res))
    );
  }
}
