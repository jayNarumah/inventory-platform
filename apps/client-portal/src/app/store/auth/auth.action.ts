
import { AuthLoggedInUserDto, E_UserType } from '@inventory-platform/api-interfaces';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AppAuthActions = createActionGroup({
  source: '[Authentication]',
  events: {
    login: props<{
      user_type: E_UserType;
      access_token: string;
      user: AuthLoggedInUserDto,
    }>(),
    logout: emptyProps(),
  },
});
