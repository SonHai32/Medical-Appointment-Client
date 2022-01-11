import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStepTwoComponent } from './booking-step-two.component';

describe('BookingStepTwoComponent', () => {
  let component: BookingStepTwoComponent;
  let fixture: ComponentFixture<BookingStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingStepTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
