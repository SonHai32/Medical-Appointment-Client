import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSectionTwoComponent } from './main-page-section-two.component';

describe('MainPageSectionTwoComponent', () => {
  let component: MainPageSectionTwoComponent;
  let fixture: ComponentFixture<MainPageSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageSectionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
