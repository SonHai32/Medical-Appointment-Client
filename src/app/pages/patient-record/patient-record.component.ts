import { PatientRecordService } from './../../services/patient-record-service/patient-record.service';
import {
  UserSelector,
  AuthSelector,
} from './../../state-management/selectors/auth.seletor';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { PatientRecord } from 'src/app/models/patient-record.model';
import { GenderService } from './../../services/gender-service/gender.service';
import { Gender } from './../../models/gender.model';
import { Ward } from './../../models/ward.model';
import { District } from './../../models/district.model';
import { Province } from './../../models/province.model';
import { PlaceService } from './../../services/place-service/place.service';
import { numberAsStringValidator } from './../../validators/input.validator';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  phoneNumberValidator,
  whiteSpaceValidator,
} from 'src/app/validators/input.validator';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.scss'],
})
export class PatientRecordComponent implements OnInit {
  @Input('patient-record') patientRecord!: any;

  currentUser!: User;

  validateForm!: FormGroup;
  listProvince!: Province[];
  listDistrict!: District[];
  listWard!: Ward[];
  listGender!: Gender[];

  listProvinceLoading = false;
  listDistrictLoading = false;
  listWardLoading = false;
  listGenderLoading = false;

  constructor(
    private fb: FormBuilder,
    private placeService: PlaceService,
    private genderService: GenderService,
    private store: Store,
    private patientRecordService: PatientRecordService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
    this.initForm();
    this.getProvinceList();
    this.getGenderList();
  }

  initForm() {
    this.validateForm = this.fb.group({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
        whiteSpaceValidator,
      ]),
      middleName: new FormControl(null, [Validators.maxLength(20)]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
        whiteSpaceValidator,
      ]),
      emailAddress: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        phoneNumberValidator,
        // Validators.pattern('[0-9]{6,10}'), //TODO check phoneNumber mactching string as number between 6-10 digit
      ]),
      citizenIdentification: new FormControl(null, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12),
        numberAsStringValidator,
        whiteSpaceValidator,
      ]),
      address: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(240),
        whiteSpaceValidator,
      ]),
      birthday: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      age: new FormControl({ value: null, disabled: true }),
      job: new FormControl(null, [Validators.maxLength(32)]),
      province: new FormControl(null, [Validators.required]),
      district: new FormControl(null, [Validators.required]),
      ward: new FormControl(null, [Validators.required]),
    });
  }

  getErrorTooltips(
    controlName:
      | 'emailAddress'
      | 'phoneNumber'
      | 'address'
      | 'firstName'
      | 'middleName'
      | 'lastName'
      | 'birthday'
      | 'citizenIdentification'
      | 'gender'
      | 'job'
      | 'province'
      | 'district'
      | 'ward'
  ): string {
    const control = this.validateForm.controls[controlName];
    switch (controlName) {
      case 'firstName':
        if (control.hasError('required')) {
          return 'Vui lòng nhập họ';
        } else if (control.hasError('maxlegnth')) {
          return 'Họ quá dài';
        } else if (control.hasError('whitespace')) {
          return 'Họ không thể là khoảng trắng';
        } else return '';
      case 'firstName':
        if (control.hasError('maxlegnth')) {
          return 'Tên đệm quá dài';
        } else return '';
      case 'lastName':
        if (control.hasError('required')) {
          return 'Vui lòng nhập tên';
        } else if (control.hasError('maxlegnth')) {
          return 'Tên quá dài';
        } else if (control.hasError('whitespace')) {
          return 'Tên không thể là khoảng trắng';
        } else return '';
      case 'citizenIdentification':
        if (control.hasError('required')) {
          return 'Vui lòng nhập CMND hoặc CCCD';
        } else if (
          control.hasError('minlength') ||
          control.hasError('maxlength') ||
          control.hasError('number')
        ) {
          return 'CMND/CCCD không hợp lệ';
        } else if (control.hasError('whitespace')) {
          return 'CMND/CCCD không thể là khoảng trắng';
        } else return '';
      case 'birthday':
        if (control.hasError('required')) {
          return 'Vui lòng chọn ngày sinh';
        } else return '';
      case 'gender':
        if (control.hasError('required')) {
          return 'Vui lòng chọn giới tính';
        } else return '';
      case 'job':
        if (control.hasError('maxlength')) {
          return 'Công việc quá dài';
        } else return '';
      case 'province':
        if (control.hasError('required')) {
          return 'Vui lòng chọn tỉnh thành';
        } else return '';
      case 'district':
        if (control.hasError('required')) {
          return 'Vui lòng chọn quận huyện';
        } else return '';
      case 'ward':
        if (control.hasError('required')) {
          return 'Vui lòng chọn phường xã';
        } else return '';
      case 'emailAddress':
        if (control.hasError('required')) {
          return 'Vui lòng nhập địa chỉ email';
        } else if (control.hasError('email')) {
          return 'Địa chỉ email không hợp lệ';
        } else return '';
      case 'address':
        if (control.hasError('required')) {
          return 'Vui lòng nhập địa chỉ';
        } else if (control.hasError('whitespace')) {
          return 'Địa chỉ không hợp lệ';
        } else if (
          control.hasError('minlength') ||
          control.hasError('maxlength')
        ) {
          return 'Địa chỉ phải từ 10 - 240 kí tự';
        } else return '';
      case 'phoneNumber':
        if (control.hasError('required')) {
          return 'Vui lòng nhập vào số điện thoại';
        } else if (control.hasError('phone')) {
          return 'Số điện thoại không hợp lệ';
        } else return '';
    }
    return '';
  }

  submitForm() {
    if (this.validateForm.valid) {
      if (this.patientRecord) {
      } else {
        this.addNew();
      }
    } else {
      this.displayValidateForm();
    }
  }

  async addNew() {
    if (this.currentUser) {
      const v = (c: string): any => {
        return this.validateForm.controls[c].value;
      };

      const newPatientRecord: PatientRecord = {
        age: v('age') as number,
        birthday: v('birthday') as Date,
        citizenIdentification: v('citizenIdentification') as string,
        emailAddress: v('emailAddress') as string,
        firstName: v('firstName') as string,
        middleName: v('middleName') as string,
        lastName: v('lastName') as string,
        gender: v('gender') as Gender,
        phoneNumber: v('phoneNumber') as string,
        address: v('address') as string,
        ward: v('ward') as Ward,
        user: this.currentUser,
      };

      this.patientRecordService.add(newPatientRecord).subscribe((res) => {
        console.log(res);
      });
    }
  }

  displayValidateForm() {
    Object.values(this.validateForm.controls).forEach((c) => {
      if (c.invalid) {
        c.markAsDirty();
        c.updateValueAndValidity();
      }
    });
  }

  onBirthdayChange(value: Date) {
    const currentYear = new Date().getFullYear();
    const userYear = value.getFullYear();
    const age = currentYear - userYear;
    this.validateForm.controls['age'].setValue(age);
  }

  birthdayRangeDisable(date: Date) {
    return date > new Date();
  }

  onProvinceChange(provinceId: string): void {
    this.validateForm.controls['district'].setValue(null);
    this.validateForm.controls['ward'].setValue(null);
    if (!provinceId) {
      return;
    }
    this.getDistrictList(provinceId);
  }

  // TODO Handle and get district values while value change, then get ward list by districtId
  onDistrictChange(districtId: string): void {
    this.validateForm.controls['ward'].setValue(null);
    if (!districtId) {
      return;
    }
    this.getWardList(districtId);
  }

  // TODO Call listCountryService for fetching country list from api

  provinceCompareFn(o1: Province, o2: Province) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  districtCompareFn(o1: Province, o2: Province) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  wardCompareFn(o1: Ward, o2: Ward) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  getProvinceList() {
    this.listProvinceLoading = true;
    this.placeService.getProvice().subscribe((res: Province[]) => {
      this.listProvince = res;
      this.listProvinceLoading = false;
    });
  }

  getDistrictList(provinceId: string): void {
    this.listDistrictLoading = true;
    this.placeService.getDistrict(provinceId).subscribe((res: District[]) => {
      this.listDistrict = res;
      this.listDistrictLoading = false;
    });
  }

  getWardList(districtId: string): void {
    this.listWardLoading = true;
    this.placeService.getWard(districtId).subscribe((res: Ward[]) => {
      this.listWard = res;
      this.listWardLoading = false;
    });
  }

  getGenderList() {
    this.genderService.getGender().subscribe((res: Gender[]) => {
      this.listGender = res;
    });
  }

  getCurrentUser() {
    this.store.select(AuthSelector.UserSelector).subscribe((user) => {
      if (user) {
        this.currentUser = user;
      }
    });
  }
}
