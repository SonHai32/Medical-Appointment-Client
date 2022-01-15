import { TestBed } from '@angular/core/testing';

import { PatientRecordService } from './patient-record.service';

describe('PatientRecordService', () => {
  let service: PatientRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
