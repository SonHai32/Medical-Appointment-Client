import { createAction, props } from '@ngrx/store';
import AuthToken from 'src/app/models/auth-token.model';
import { User } from 'src/app/models/user.model';

export enum AuthActionTypes {
  LOGIN = '[AUTH_ACTION] Login',
  LOGIN_SUCCESS = '[AUTH_ACTION] Login success',
  LOGIN_FAIL = '[AUTH_ACTION] Login fail',
  REGISTER = '[AUTH_ACTION] Register',
  REGISTER_SUCCESS = '[AUTH_ACTION] Register success',
  REGISTER_FAIL = '[AUTH_ACTION] Register fail',
  SIGN_OUT = '[AUTH_ACTION] Signout',
  SIGN_OUT_SUCCESS = '[AUTH_ACTION] Signout success',
  SIGN_OUT_FAIL = '[AUTH_ACTION] Signout fail',
  CHECK_AUTH = '[AUTH_ACTION] Check auth',
  CHECK_AUTH_SUCCESS = '[AUTH_ACTION] Check auth success',
  CHECK_AUTH_FAIL = '[AUTH_ACTION] Check auth fail',
  GET_USER_AUTH = '[AUTH_ACTION] Get user auth',
  GET_USER_AUTH_SUCCESS = '[AUTH_ACTION] Get user auth success',
  GET_USER_AUTH_FAIL = '[AUTH_ACTION] Get user auth fail',
}

export const LoginAction = createAction(
  AuthActionTypes.LOGIN,
  props<{ username: string; password: string }>()
);

export const LoginSuccessAction = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ accessToken: AuthToken }>()
);

export const LoginFailAction = createAction(
  AuthActionTypes.LOGIN_FAIL,
  props<{ errorMessage: string }>()
);

export const RegisterAction = createAction(AuthActionTypes.REGISTER);

export const RegisterSuccessAction = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<{ accessToken: AuthToken }>()
);

export const RegisterFailAction = createAction(
  AuthActionTypes.REGISTER_FAIL,
  props<{ errorMessage: string }>()
);

export const SignOutAction = createAction(AuthActionTypes.SIGN_OUT);

export const SignOutSuccessAction = createAction(
  AuthActionTypes.SIGN_OUT_SUCCESS
);

export const SignOutFailAction = createAction(
  AuthActionTypes.SIGN_OUT_FAIL,
  props<{ errorMessage: string }>()
);

export const CheckAuthAction = createAction(AuthActionTypes.CHECK_AUTH);

export const CheckAuthSuccessAction = createAction(
  AuthActionTypes.CHECK_AUTH_SUCCESS,
  props<{ accessToken: AuthToken }>()
);

export const CheckAuthFailAction = createAction(
  AuthActionTypes.CHECK_AUTH_FAIL,
  props<{ errorMessage: string }>()
);
export const GetUserAuthAction = createAction(
  AuthActionTypes.GET_USER_AUTH,
  props<{ accessToken: AuthToken }>()
);

export const GetUserAuthSuccessAction = createAction(
  AuthActionTypes.GET_USER_AUTH_SUCCESS,
  props<{ user: User }>()
);

export const GetUserAuthFailAction = createAction(
  AuthActionTypes.GET_USER_AUTH_FAIL,
  props<{ message: string }>()
);

export const AuthActions = {
  LoginAction,
  LoginSuccessAction,
  LoginFailAction,
  RegisterAction,
  RegisterSuccessAction,
  RegisterFailAction,
  SignOutAction,
  SignOutSuccessAction,
  SignOutFailAction,
  CheckAuthAction,
  CheckAuthSuccessAction,
  CheckAuthFailAction,
  GetUserAuthAction,
  GetUserAuthSuccessAction,
  GetUserAuthFailAction,
};
