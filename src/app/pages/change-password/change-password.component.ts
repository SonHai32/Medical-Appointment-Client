import { whiteSpaceValidator } from './../../validators/input.validator';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  confirmPasswordValidator = (
    control: FormControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true, error: true };
    } else if (
      control.value !== this.validateForm.controls['newPassword'].value
    ) {
      return { confirm: true, error: true };
    }
    return {};
  };

  updateConfirmPasswordValidator() {
    Promise.resolve().then(() =>
      this.validateForm.controls['reNewPassword'].updateValueAndValidity()
    );
  }

  initForm() {
    this.validateForm = this.fb.group({
      oldPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(64),
        whiteSpaceValidator,
      ]),
      reNewPassword: new FormControl(null, [
        Validators.required,
        whiteSpaceValidator,
        this.confirmPasswordValidator,
      ]),
    });
  }

  getErrorTooltips(
    controlName: 'oldPassword' | 'newPassword' | 'reNewPassword'
  ): string {
    const control = this.validateForm.controls[controlName];
    switch (controlName) {
      case 'oldPassword':
        if (control.hasError('required')) {
          return 'Vui lòng nhập mật khẩu cũ';
        } else return '';
      case 'newPassword':
        if (control.hasError('required')) {
          return 'Vui lòng nhập mật khẩu mới';
        } else if (
          control.hasError('minlength') ||
          control.hasError('maxlength')
        ) {
          return 'Mật khẩu phải từ 6 - 64 kí tự';
        } else if (control.hasError('whitespace')) {
          return 'Mật khẩu không thể là khoảng trắng';
        } else return '';
      case 'reNewPassword':
        if (control.hasError('required')) {
          return 'Vui lòng nhập lại mật khẩu mới';
        } else if (control.hasError('confirm')) {
          return 'Mật khẩu không khớp';
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
