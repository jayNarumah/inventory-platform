import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class TenantUserAuthLoginRequestDto {
  // @IsNotEmpty()
  // @IsEmail()
  // username!: string;

  // @IsNotEmpty()
  // @MinLength(8)
  // password!: string;
}

export interface TenantUserAuthLoginResponseDto {
  access_token: string;
  must_change_password: boolean;
  user: TenantUserAuthLoggedInUserDto;
}

export interface TenantUserAuthLoggedInUserDto {
  uid: string;
  user_type: any;
  staff_code: string;
  full_name: string;
  permissions: string[];
}
