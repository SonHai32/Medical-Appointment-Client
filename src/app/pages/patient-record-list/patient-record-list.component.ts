import { PatientRecordService } from './../../services/patient-record-service/patient-record.service';
import { PatientRecord } from 'src/app/models/patient-record.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-record-list',
  templateUrl: './patient-record-list.component.html',
  styleUrls: ['./patient-record-list.component.scss'],
})
export class PatientRecordListComponent implements OnInit {
  patientRecordList$!: Observable<PatientRecord[]>;
  constructor(private patientRecordService: PatientRecordService) {}

  ngOnInit(): void {
    this.getPatientRecordList();
  }

  getPatientRecordList() {
    this.patientRecordList$ = this.patientRecordService.getAll();
  }
}
