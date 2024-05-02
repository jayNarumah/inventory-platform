export interface User {
  uid: string;
  full_name: string;
  email_address: string;
  password: string;
  gender: string;
  dob: Date;
  created_at: Date;
  last_modified_at: Date;
}
export interface CreateUserDto {
  full_name: string;
  email_address: string;
  password: string;
  gender: string;
  dob: Date;
}

export interface UpdateUserDto {
  full_name: string;
  email_address: string;
  password: string;
  gender: string;
  dob: Date;
}
export interface CreateUserAccessTokenDto {
  access_token: string;
  expires_in_minutes: number;
  user_uid: string;
}
export interface UpdateUserAccessTokenDto {
  access_token: string;
  expires_in_minutes: number;
  user_uid: string;
}
