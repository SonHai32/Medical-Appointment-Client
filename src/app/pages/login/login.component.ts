import { AuthSelector } from './../../state-management/selectors/auth.seletor';
import { Observable } from 'rxjs';
import { AuthActions } from './../../state-management/actions/auth.action';
import { AuthService } from './../../services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  authLoading = false;

  constructor(
    private fb: FormBuilder,
    private authSewrvice: AuthService,
    private store: Store,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.store.select(AuthSelector.AuthStateSeletor).subscribe((val) => {
      this.authLoading = val.isLoading;
      if (val.hasError) {
        this.nzMessageService.error(val.errorMessage ?? 'Có lỗi xảy ra');
      }
    });
  }

  initForm() {
    this.validateForm = this.fb.group({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(64),
      ]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  getErrorTooltips(controlName: 'username' | 'password'): string {
    switch (controlName) {
      case 'username':
        if (this.validateForm.controls[controlName].hasError('required')) {
          return 'Vui lòng nhập tên tài khoản';
        } else return '';
      case 'password':
        if (this.validateForm.controls[controlName].hasError('required')) {
          return 'Vui lòng nhập mật khẩu';
        } else return '';
      default:
        return '';
    }
  }

  formSumbit() {
    if (this.validateForm.valid) {
      const username = this.validateForm.controls['username'].value;
      const password = this.validateForm.controls['password'].value;

      this.login(username, password);
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

  login(username: string, password: string) {
    this.store.dispatch(AuthActions.LoginAction({ username, password }));
  }
}
