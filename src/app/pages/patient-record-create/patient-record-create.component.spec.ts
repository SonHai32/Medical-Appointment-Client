import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRecordCreateComponent } from './patient-record-create.component';

describe('PatientRecordCreateComponent', () => {
  let component: PatientRecordCreateComponent;
  let fixture: ComponentFixture<PatientRecordCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRecordCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRecordCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
