import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthLoginRequestDto, AuthLoginResponseDto } from '@inventory-platform/api-interfaces';
import { Observable } from 'rxjs';
import { apiBaseUrl } from './api';

@Injectable({
  providedIn: 'root'
})
export class AuthEndpoint {
  baseUrl = `${apiBaseUrl}/auth`;

  // baseUrl = '/api/auth';

  constructor(private readonly httpClient: HttpClient) { }

  login(
    payload: AuthLoginRequestDto
  ): Observable<AuthLoginResponseDto> {
    return this.httpClient.post<AuthLoginResponseDto>(
      `${this.baseUrl}/login`,
      payload
    );
  }

  // register(
  //   payload: CustomerAuthRegisterRequestDto
  // ): Observable<CustomerAuthRegisterResponseDto> {
  //   return this.httpClient.post<CustomerAuthRegisterResponseDto>(
  //     `${this.baseUrl}/register`,
  //     payload
  //   );
  // }

//   sendRecoveryEmail(
//     payload: CommerceDtos.CustomerPasswordRecoveryRequestDto
//   ): Observable<CommerceDtos.CustomerPasswordRecoveryResponseDto> {
//     return this.httpClient.post<CommerceDtos.CustomerPasswordRecoveryResponseDto>(
//       `${this.baseUrl}/send-recovery-mail`,
//       payload
//     );
//   }

//   verifyToken(
//     resetToken: string,
//     email: string
//   ): Observable<CommerceDtos.CustomerAuthForgotPasswordVerifyTokenResponseDto> {
//     return this.httpClient.get<CommerceDtos.CustomerAuthForgotPasswordVerifyTokenResponseDto>(
//       `${this.baseUrl}/verify-token/${resetToken}/${email}`
//     );
//   }

//   changePassword(
//     payload: CommerceDtos.CustomerPasswordChangeRequestDto
//   ): Observable<CommerceDtos.CustomerPasswordChangeResponseDto> {
//     return this.httpClient.post<CommerceDtos.CustomerPasswordChangeResponseDto>(
//       `${this.baseUrl}/change-password`,
//       payload
//     );
//   }
}
