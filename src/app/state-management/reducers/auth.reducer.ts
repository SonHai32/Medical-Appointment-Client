import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.action';
import AuthState from '../state/auth.state';
const initialState: AuthState = {
  currentUser: null,
  authenticated: false,
  errorMessage: '',
  hasError: false,
  isLoading: false,
  accessToken: null,
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.LoginAction, (state) => ({ ...state, isLoading: true })),

  on(AuthActions.LoginSuccessAction, (state, { accessToken }) => ({
    ...state,
    isLoading: false,
    isAuthenticated: true,
    accessToken,
  })),

  on(AuthActions.LoginFailAction, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    hasError: true,
    isLoading: false,
  })),

  on(AuthActions.RegisterAction, (state) => ({ ...state, isLoading: true })),

  on(AuthActions.RegisterSuccessAction, (state, { accessToken }) => ({
    ...state,
    accessToken,
    isLoading: false,
    isAuthenticated: true,
  })),

  on(AuthActions.RegisterFailAction, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    hasError: true,
    isLoading: false,
  })),

  on(AuthActions.SignOutAction, (state) => ({ ...state, isLoading: true })),

  on(AuthActions.SignOutSuccessAction, (state) => ({
    ...state,
    isLoading: false,
    currentUser: null,
    isAuthenticated: false,
    accessToken: null,
    refreshToken: '',
  })),

  on(AuthActions.SignOutFailAction, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    isLoading: false,
    hasError: true,
  })),

  on(AuthActions.CheckAuthAction, (state) => ({ ...state, isLoading: true })),

  on(AuthActions.CheckAuthSuccessAction, (state, { accessToken }) => ({
    ...state,
    accessToken,
    isAuthenticated: true,
    isLoading: false,
  })),

  on(AuthActions.CheckAuthFailAction, (state, { errorMessage }) => ({
    ...state,
    accessToken: null,
    isAuthenticated: false,
    isLoading: false,
    errorMessage,
  })),

  on(AuthActions.GetUserAuthAction, (state: AuthState) => ({
    ...state,
    isLoading: true,
  })),

  on(AuthActions.GetUserAuthSuccessAction, (state: AuthState, { user }) => ({
    ...state,
    currentUser: user,
    isAuthenticated: true,
    isLoading: false,
  })),

  on(AuthActions.GetUserAuthFailAction, (state: AuthState) => ({
    ...state,
    isLoading: false,
  }))
);
