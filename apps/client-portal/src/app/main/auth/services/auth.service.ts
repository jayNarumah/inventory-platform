import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import {
  authSelectIsLoggedIn,
  authSelectIsUserType,
  authSelectUser,
} from '../../../store/auth/auth.selectors';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthLoggedInUserDto, AuthLoginRequestDto } from '@inventory-platform/api-interfaces';
import { AppAuthActions } from '../../../store/auth/auth.action';
import { AppNotificationActions } from '../../../store/notification/notification.action';
import { AuthEndpoint } from '../../../api/endpoints/auth.endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = this.appStore.select(authSelectIsLoggedIn);
  private _userType$ = this.appStore.select(authSelectIsUserType);
  public user$ = this.appStore.select(authSelectUser);
  // private _assignedPermissions: string[] = [];
  // private _userType: string = '';

  constructor(
    private readonly route: Router,
    private readonly authEndpoint: AuthEndpoint,
    private readonly appStore: Store<AppState>
  ) {}

  login(payload: AuthLoginRequestDto) {
    return this.authEndpoint.login(payload).pipe(
      map((response) => {
        if (response && response.access_token) {
          this.appStore.dispatch(
            AppAuthActions.login({
              access_token: response.access_token,
              user: response.user,
              user_type: response.user_type,
            })
          );

          // Display welcome message!
          setTimeout(() => {
            this.appStore.dispatch(
              AppNotificationActions.success({
                title: `Welcome back, ${response.user.full_name}`,
                message:
                  'You have successfully logged in to Kasuwa. Enjoy!'
              })
            );
          }, 2500);
        }

        return response;
      })
    );
  }

  get isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$;
  }


  get user(): Observable<AuthLoggedInUserDto | null > {
    return this.user$;
  }
}
