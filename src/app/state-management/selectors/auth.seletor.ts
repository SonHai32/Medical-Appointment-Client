import { createFeatureSelector, createSelector } from '@ngrx/store';
import AuthState from '../state/auth.state';

const featureSelector = createFeatureSelector<AuthState>('auth');

export const TokenSelector = createSelector(
  featureSelector,
  (state: AuthState) => state.accessToken
);

export const UserSelector = createSelector(
  featureSelector,
  (state: AuthState) => state.currentUser
);

export const IsLoadingSelector = createSelector(
  featureSelector,
  (state: AuthState) => state.isLoading
);

export const AuthStateSeletor = createSelector(
  featureSelector,
  (state) => state
);

export const AuthSelector = {
  TokenSelector,
  UserSelector,
  AuthStateSeletor,
};
