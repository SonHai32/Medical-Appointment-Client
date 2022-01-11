import {
  HospitalTime,
  HospitalTimeData,
} from './../../models/hospital-time.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss'],
})
export class HospitalListComponent implements OnInit {
  data = [
    {
      id: 1,
      name: 'Bệnh viện Đa khoa khu vực huyện Củ chi',
      place: 'dasdsdsad',
      image:
        'https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg',
    },

    {
      id: 1,
      name: 'Bệnh viện Đa khoa khu vực huyện Củ chi',
      place: 'dasdsdsad',
      image:
        'https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg',
    },
    {
      id: 1,
      name: 'BV lorem lorem',
      place: 'dasdsdsad',
      image:
        'https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg',
    },
    {
      id: 1,
      name: 'Bệnh viện Đa khoa khu vực huyện Củ chi',
      place: 'dasdsdsad',
      image:
        'https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg',
    },
    {
      id: 1,
      name: 'BV lorem lorem',
      place: 'dasdsdsad',
      image:
        'https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg',
    },
  ];

  hospitalTime: HospitalTime[] = HospitalTimeData;

  constructor() {}

  ngOnInit(): void {}
}
