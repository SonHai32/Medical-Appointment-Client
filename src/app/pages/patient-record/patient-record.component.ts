import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { PatientScheduleActions } from './../../state-management/actions/patient-schedule.action';
import { PatientRecordService } from './../../services/patient-record-service/patient-record.service';
import { AuthSelector } from './../../state-management/selectors/auth.seletor';
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
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.scss'],
})
export class PatientRecordComponent implements OnInit {
  @Input('patient-record') patientRecord: PatientRecord | null = null;
  @Output('onDelete') onItemDelete = new EventEmitter<string>();

  btnSubmitLoading = false;

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
    private patientRecordService: PatientRecordService,
    private router: Router,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
    this.initForm();
    this.getProvinceList();
    this.getGenderList();
  }

  initForm() {
    this.validateForm = this.fb.group({
      firstName: new FormControl(
        this.patientRecord ? this.patientRecord.firstName : null,
        [Validators.required, Validators.maxLength(20), whiteSpaceValidator]
      ),
      middleName: new FormControl(
        this.patientRecord ? this.patientRecord.middleName : null,
        [Validators.maxLength(20)]
      ),
      lastName: new FormControl(
        this.patientRecord ? this.patientRecord.lastName : null,
        [Validators.required, Validators.maxLength(20), whiteSpaceValidator]
      ),
      emailAddress: new FormControl(
        this.patientRecord ? this.patientRecord.emailAddress : null,
        [Validators.required, Validators.email]
      ),
      phoneNumber: new FormControl(
        this.patientRecord ? this.patientRecord.phoneNumber : null,
        [
          Validators.required,
          phoneNumberValidator,
          // Validators.pattern('[0-9]{6,10}'), //TODO check phoneNumber mactching string as number between 6-10 digit
        ]
      ),
      citizenIdentification: new FormControl(
        this.patientRecord ? this.patientRecord.citizenIdentification : null,
        [
          Validators.minLength(9),
          Validators.maxLength(12),
          numberAsStringValidator,
          whiteSpaceValidator,
        ]
      ),
      address: new FormControl(
        this.patientRecord ? this.patientRecord.address : null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(240),
          whiteSpaceValidator,
        ]
      ),
      birthday: new FormControl(
        this.patientRecord ? this.patientRecord.birthday : null,
        [Validators.required]
      ),
      gender: new FormControl(
        this.patientRecord ? this.patientRecord.gender.id : null,
        [Validators.required]
      ),
      age: new FormControl({ value: null, disabled: true }),
      job: new FormControl(this.patientRecord ? this.patientRecord.job : null, [
        Validators.maxLength(32),
      ]),
      province: new FormControl(null, [Validators.required]),
      district: new FormControl(null, [Validators.required]),
      ward: new FormControl(null, [Validators.required]),
    });

    if (this.patientRecord) {
      this.placeService
        .getWardToProvinceList(this.patientRecord.ward)
        .subscribe((res) => {
          this.listProvince = res[2];
          this.listDistrict = res[1];
          this.listWard = res[0];
        });

      this.validateForm.controls['province'].setValue(
        this.patientRecord.ward.district.province.id
      );
      this.validateForm.controls['district'].setValue(
        this.patientRecord.ward.district.id
      );
      this.validateForm.controls['ward'].setValue(this.patientRecord.ward.id);
    }
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
          return 'Vui l??ng nh???p h???';
        } else if (control.hasError('maxlegnth')) {
          return 'H??? qu?? d??i';
        } else if (control.hasError('whitespace')) {
          return 'H??? kh??ng th??? l?? kho???ng tr???ng';
        } else return '';
      case 'firstName':
        if (control.hasError('maxlegnth')) {
          return 'T??n ?????m qu?? d??i';
        } else return '';
      case 'lastName':
        if (control.hasError('required')) {
          return 'Vui l??ng nh???p t??n';
        } else if (control.hasError('maxlegnth')) {
          return 'T??n qu?? d??i';
        } else if (control.hasError('whitespace')) {
          return 'T??n kh??ng th??? l?? kho???ng tr???ng';
        } else return '';
      case 'citizenIdentification':
        if (
          control.hasError('minlength') ||
          control.hasError('maxlength') ||
          control.hasError('number')
        ) {
          return 'CMND/CCCD kh??ng h???p l???';
        } else if (control.hasError('whitespace')) {
          return 'CMND/CCCD kh??ng th??? l?? kho???ng tr???ng';
        } else return '';
      case 'birthday':
        if (control.hasError('required')) {
          return 'Vui l??ng ch???n ng??y sinh';
        } else return '';
      case 'gender':
        if (control.hasError('required')) {
          return 'Vui l??ng ch???n gi???i t??nh';
        } else return '';
      case 'job':
        if (control.hasError('maxlength')) {
          return 'C??ng vi???c qu?? d??i';
        } else return '';
      case 'province':
        if (control.hasError('required')) {
          return 'Vui l??ng ch???n t???nh th??nh';
        } else return '';
      case 'district':
        if (control.hasError('required')) {
          return 'Vui l??ng ch???n qu???n huy???n';
        } else return '';
      case 'ward':
        if (control.hasError('required')) {
          return 'Vui l??ng ch???n ph?????ng x??';
        } else return '';
      case 'emailAddress':
        if (control.hasError('required')) {
          return 'Vui l??ng nh???p ?????a ch??? email';
        } else if (control.hasError('email')) {
          return '?????a ch??? email kh??ng h???p l???';
        } else return '';
      case 'address':
        if (control.hasError('required')) {
          return 'Vui l??ng nh???p ?????a ch???';
        } else if (control.hasError('whitespace')) {
          return '?????a ch??? kh??ng h???p l???';
        } else if (
          control.hasError('minlength') ||
          control.hasError('maxlength')
        ) {
          return '?????a ch??? ph???i t??? 10 - 240 k?? t???';
        } else return '';
      case 'phoneNumber':
        if (control.hasError('required')) {
          return 'Vui l??ng nh???p v??o s??? ??i???n tho???i';
        } else if (control.hasError('phone')) {
          return 'S??? ??i???n tho???i kh??ng h???p l???';
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

  addNew() {
    if (this.currentUser) {
      this.btnSubmitLoading = true;

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

      this.patientRecordService.add(newPatientRecord).subscribe(
        (res: any) => {
          this.nzMessageService.info(res.message);
          this.btnSubmitLoading = false;
          setTimeout(
            () => this.router.navigate(['/', 'user', 'patient-records']),
            320
          );
        },
        (error) => {
          this.nzMessageService.error((error as HttpErrorResponse).error);
          this.btnSubmitLoading = false;
        }
      );
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

  selectPatientRecord() {
    if (this.patientRecord) {
      this.store.dispatch(
        PatientScheduleActions.selectPatientRecordAction({
          patientRecord: this.patientRecord,
        })
      );
      this.router.navigate(['../../hospital']);
    }
  }

  deleteSubmit() {
    //emitOutput
    if (this.patientRecord && this.patientRecord.id) {
      this.patientRecordService.deleteOne(this.patientRecord.id).subscribe(
        (res) => {
          this.nzMessageService.success(res.message);
          this.onItemDelete.emit(this.patientRecord?.id);
        },
        (error) => {
          this.nzMessageService.error((error as HttpErrorResponse).error);
        }
      );
    }
  }
}
