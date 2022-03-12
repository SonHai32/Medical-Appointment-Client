import { AuthActions } from './../../state-management/actions/auth.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthSelector } from 'src/app/state-management/selectors/auth.seletor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser$!: Observable<User | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.currentUser$ = this.store.select(AuthSelector.UserSelector);
  }

  onAffixChange(e: any) {
    console.log(e);
  }

  onSignOut() {
    this.store.dispatch(AuthActions.SignOutAction());
  }
}
