import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  submitForm() {
    if (this.validateForm.valid) {
    } else {
      this.refreshForm();
    }
  }

  refreshForm() {
    Object.values(this.validateForm.controls).forEach((c) => {
      if (c.invalid) {
        c.markAsDirty();
        c.updateValueAndValidity();
      }
    });
  }

  initForm() {
    this.validateForm = this.fb.group({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ]),
      password: new FormControl(null, [Validators.required]),
      fullname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
      emailAddress: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  getErrorTooltips(
    controlName:
      | 'username'
      | 'password'
      | 'fullname'
      | 'emailAddress'
      | 'phoneNumber'
  ): string {
    const control = this.validateForm.controls[controlName];
    switch (controlName) {
      case 'emailAddress':
        if (control.hasError('required')) return 'Vui lòng nhập email';
        else if (control.hasError('email')) return 'Email không hợp lệ';
        else return '';
      case 'fullname':
        if (control.hasError('required')) return 'Vui lòng nhập họ tên';
        else if (control.hasError('minlength') || control.hasError('maxlength'))
          return 'Họ và tên phải từ 3 - 50 kí tự';
        else return '';
      case 'phoneNumber':
        if (control.hasError('required')) {
          return 'Vui lòng nhập số điện thoại';
        } else if (
          control.hasError('minlength') ||
          control.hasError('maxlength')
        ) {
          return 'Số điện thoại không hợp lệ';
        } else {
          return '';
        }
      case 'username':
        if (control.hasError('required')) return 'Vui lòng nhập tên tài khoản';
        else if (control.hasError('minlength') || control.hasError('maxlength'))
          return 'Họ và tên phải từ 6 - 32 kí tự';
        else return '';
      case 'password':
        if (control.hasError('required')) return 'Vui lòng nhập password';
    }
    return '';
  }
}
