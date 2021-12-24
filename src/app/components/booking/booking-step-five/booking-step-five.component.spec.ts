import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStepFiveComponent } from './booking-step-five.component';

describe('BookingStepFiveComponent', () => {
  let component: BookingStepFiveComponent;
  let fixture: ComponentFixture<BookingStepFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingStepFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStepFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
