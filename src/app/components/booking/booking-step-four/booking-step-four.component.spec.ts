import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStepFourComponent } from './booking-step-four.component';

describe('BookingStepFourComponent', () => {
  let component: BookingStepFourComponent;
  let fixture: ComponentFixture<BookingStepFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingStepFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStepFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
