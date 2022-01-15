import { AuthActions } from './../state-management/actions/auth.action';
import { Store } from '@ngrx/store';
export const initializer = (store: Store) => {
  return () =>
    new Promise((reslove) => {
      reslove(store.dispatch(AuthActions.CheckAuthAction()));
    });
};
