import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRecordListComponent } from './patient-record-list.component';

describe('PatientRecordListComponent', () => {
  let component: PatientRecordListComponent;
  let fixture: ComponentFixture<PatientRecordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRecordListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
