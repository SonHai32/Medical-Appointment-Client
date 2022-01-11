import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.scss'],
})
export class PatientRecordComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.validateForm = this.fb.group({
      username: new FormControl(null),
      emailAddress: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern('[0-9]{6,10}'), //TODO check phoneNumber mactching string as number between 6-10 digit
      ]),
      address: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(240),
        Validators.pattern('\\s'), //TODO check white space
      ]),
      createdAt: new FormControl(null),
      totalPatientRecord: new FormControl(null),
    });
  }

  getErrorTooltips(
    controlName: 'emailAddress' | 'phoneNumber' | 'address'
  ): string {
    const control = this.validateForm.controls[controlName];
    switch (controlName) {
      case 'emailAddress':
        if (control.hasError('required')) {
          return 'Vui lòng nhập địa chỉ email';
        } else if (control.hasError('email')) {
          return 'Địa chỉ email không hợp lệ';
        } else return '';
      case 'address':
        if (control.hasError('required')) {
          return 'Vui lòng nhập địa chỉ';
        } else if (control.hasError('pattern')) {
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
        } else if (
          control.hasError('minlength') ||
          control.hasError('maxlength') ||
          control.hasError('pattern')
        ) {
          return 'Số điện thoại không hợp lệ';
        } else return '';
    }
  }

  submitForm() {
    if (this.validateForm.valid) {
    } else {
      this.displayValidateForm();
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
}
