import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-record-list',
  templateUrl: './patient-record-list.component.html',
  styleUrls: ['./patient-record-list.component.scss']
})
export class PatientRecordListComponent implements OnInit {

  panels = [1, 2]
  constructor() { }

  ngOnInit(): void {
  }

}
