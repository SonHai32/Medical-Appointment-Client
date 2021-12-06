import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSectionThreeComponent } from './main-page-section-three.component';

describe('MainPageSectionThreeComponent', () => {
  let component: MainPageSectionThreeComponent;
  let fixture: ComponentFixture<MainPageSectionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageSectionThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
