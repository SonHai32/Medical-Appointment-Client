import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStepOneComponent } from './booking-step-one.component';

describe('BookingStepOneComponent', () => {
  let component: BookingStepOneComponent;
  let fixture: ComponentFixture<BookingStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
