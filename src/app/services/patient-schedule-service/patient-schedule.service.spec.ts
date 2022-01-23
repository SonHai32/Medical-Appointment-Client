import { TestBed } from '@angular/core/testing';

import { PatientScheduleService } from './patient-schedule.service';

describe('PatientScheduleService', () => {
  let service: PatientScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
