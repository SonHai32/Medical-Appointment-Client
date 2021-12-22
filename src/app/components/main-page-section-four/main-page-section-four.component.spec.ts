import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSectionFourComponent } from './main-page-section-four.component';

describe('MainPageSectionFourComponent', () => {
  let component: MainPageSectionFourComponent;
  let fixture: ComponentFixture<MainPageSectionFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageSectionFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSectionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
