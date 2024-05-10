import { ArrayMinSize, IsArray, IsBoolean, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
export class AuthLoginRequestDto {
  // @IsNotEmpty()
  username!: string;

  // @IsNotEmpty()
  // @MinLength(8)
  password!: string;
}

export interface AuthLoginResponseDto {
  access_token: string;
  // must_change_password: boolean;
  user: AuthLoggedInUserDto;
}

export interface AuthLoggedInUserDto {
  id?: number;
  uid: string;
  full_name: string;
  email_address: string;
}



export class UpdatePasswordDto {
  // @IsNotEmpty()
  // @IsString()
  password!: string;

  // @IsBoolean()
  must_change_password!: false;
}

export class ForgotPasswordDto {
  // @IsNotEmpty()
  // @IsString()
  email!: string;
}

export class UpdateProfileDto {
  // @IsEmail()
  address?: string;

  // @IsString()
  phone?: string

  // @IsString()
  site?: string

  // @IsString()
  gender?: string

  // @IsString()
  birthday?: string;

  // @IsArray()
  // @ArrayMaxSize(10)
  // skills?: MdaUserSkillDto[]
}
