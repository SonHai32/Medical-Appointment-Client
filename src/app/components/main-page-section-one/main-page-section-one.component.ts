import { Component, OnInit } from '@angular/core';

import AOS from 'aos';
@Component({
  selector: 'app-main-page-section-one',
  templateUrl: './main-page-section-one.component.html',
  styleUrls: ['./main-page-section-one.component.scss'],
})
export class MainPageSectionOneComponent implements OnInit {
  constructor() {
    AOS.init();
  }

  ngOnInit(): void {}
}
