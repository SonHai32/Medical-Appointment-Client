import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStepThreeComponent } from './booking-step-three.component';

describe('BookingStepThreeComponent', () => {
  let component: BookingStepThreeComponent;
  let fixture: ComponentFixture<BookingStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingStepThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
