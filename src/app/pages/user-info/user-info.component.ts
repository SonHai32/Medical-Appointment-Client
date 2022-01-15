import { User } from 'src/app/models/user.model';
import { take } from 'rxjs/operators';
import { AuthSelector } from './../../state-management/selectors/auth.seletor';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  validateForm!: FormGroup;
  currentUser!: User;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private datePipe: DatePipe,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.store
      .select(AuthSelector.UserSelector)
      .pipe(take(1))
      .subscribe((user) => {
        if (user) {
          this.currentUser = user;
          this.validateForm = this.fb.group({
            username: new FormControl({ value: user.username, disabled: true }),
            emailAddress: new FormControl(user.emailAddress, [
              Validators.required,
              Validators.email,
            ]),
            phoneNumber: new FormControl(
              user.phoneNumber ? user.phoneNumber : '',
              [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(10),
                Validators.pattern('[0-9]{6,10}'), //TODO check phoneNumber mactching string as number between 6-10 digit
              ]
            ),
            address: new FormControl(user.address ? user.address : '', [
              Validators.minLength(10),
              Validators.maxLength(240),
              Validators.pattern('\\s'), //TODO check white space
            ]),
            createdAt: new FormControl({
              value: this.datePipe
                .transform(user.createdAt, 'dd/MM/yyyy')
                ?.toString(),
              disabled: true,
            }),
          });
        }
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
      if (this.currentUser) {
        let updateUser = this.currentUser;

        const emailAddress = this.validateForm.controls['emailAddress'].value;
        const phoneNumber = this.validateForm.controls['phoneNumber'].value;
        const address = this.validateForm.controls['address'].value;

        updateUser = { ...updateUser, emailAddress, phoneNumber, address };

        this.userService
          .updateUser(updateUser)
          .subscribe((val) => console.log(val));
      }
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
