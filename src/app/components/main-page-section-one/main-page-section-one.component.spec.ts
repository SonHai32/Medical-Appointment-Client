import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSectionOneComponent } from './main-page-section-one.component';

describe('MainPageSectionOneComponent', () => {
  let component: MainPageSectionOneComponent;
  let fixture: ComponentFixture<MainPageSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageSectionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
