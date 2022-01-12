import { AbstractControl } from '@angular/forms';

export const whiteSpaceValidator = (
  control: AbstractControl
): { [s: string]: boolean } | null => {
  if (!control.value) {
    return { required: true };
  } else if (new RegExp('\\s').test(control.value)) {
    return { whitespace: true, error: true };
  }
  return {};
};

export const phoneNumberValidator = (
  control: AbstractControl
): { [s: string]: boolean } => {
  if (!control.value) {
    return { required: true };
  } else if (!new RegExp('^[0-9]{6,10}$').test(control.value)) {
    return { phone: true, error: true };
  }
  return {};
};

export const numberAsStringValidator = (
  control: AbstractControl
): { [s: string]: boolean } => {
  if (!control.value) {
    return { required: true };
  } else if (!new RegExp('[0-9]$').test(control.value)) {
    return { number: true, error: true };
  }
  return {};
};
