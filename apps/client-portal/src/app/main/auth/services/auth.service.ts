import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import {
    authSelectIsLoggedIn,
  authSelectIsUserType,
  authSelectUser,
} from '../../../store/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = this.appStore.select(authSelectIsLoggedIn);
  private _userType$ = this.appStore.select(authSelectIsUserType);
  public user$ = this.appStore.select(authSelectUser);
;

  private _assignedPermissions: string[] = [];
  private _userType: string = '';

  constructor(private readonly appStore: Store<AppState>) {


    this._userType$.subscribe({
      next: (userType) => {
        this._userType = userType;
      },
    });
  }

  get user() {
    return this.user$;
  }
}
