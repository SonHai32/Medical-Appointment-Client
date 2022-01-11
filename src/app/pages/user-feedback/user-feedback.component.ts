import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.scss'],
})
export class UserFeedbackComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initValidateForm();
  }

  initValidateForm() {
    this.validateForm = this.fb.group({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      content: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  getErrorTooltip(controlName: 'title' | 'content') {
    const control = this.validateForm.controls[controlName];

    switch (controlName) {
      case 'title':
        if (control.hasError('required')) {
          return 'Vui lòng nhập tiêu đề';
        } else if (control.hasError('minlength')) {
          return 'Tiêu đề quá ngắn';
        } else return '';
      case 'content':
        if (control.hasError('required')) {
          return 'Vui lòng nhập nội dung';
        } else if (control.hasError('minlength')) {
          return 'Nội dung quá ngắn';
        } else return '';
    }
  }

  onSubmit() {
    if (this.validateForm.valid) {
    } else {
      this.updateValidateState();
    }
  }

  updateValidateState() {
    Object.values(this.validateForm.controls).forEach((c) => {
      if (c.invalid) {
        c.markAsDirty();
        c.updateValueAndValidity();
      }
    });
  }
}
