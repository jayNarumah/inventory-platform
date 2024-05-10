import { AuthLoggedInUserDto } from "@inventory-platform/api-interfaces";


export interface AppAuthState {
  user_type: string | null;
  access_token: string | null;
  user: AuthLoggedInUserDto | null;
}
