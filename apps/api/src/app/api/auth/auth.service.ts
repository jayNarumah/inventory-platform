import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UidService } from '../../util/uid/uid.service';
import { BcryptService } from '../../util/bcrypt/bcrypt.service';
import { AuthLoginRequestDto, AuthLoginResponseDto, E_UserType } from '@inventory-platform/api-interfaces';
import { UserRepository } from '../../database/repositories/user.repository';
import { UserAccessTokenRepository } from '../../database/repositories/user-access-token.respository';
@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userAccessTokenRepository: UserAccessTokenRepository,
    private readonly uidService: UidService,
    private readonly bcryptService: BcryptService,
  ) { }

  async login(request: AuthLoginRequestDto): Promise<AuthLoginResponseDto> {
    const user = await this.userRepository.findByEmail(request.email);
    if (
      user == null ||
      !(await this.bcryptService.comparePasswords(
        request.password,
        user.password,
      ))
    ) {
      throw new UnauthorizedException('Invalid Credentials!');
    }

    const accessToken = await this.generateUserAccessToken(user.uid);

    const response: AuthLoginResponseDto = {
      access_token: accessToken,
      user: {
        uid: user.uid,
        full_name: user.full_name,
        email_address: user.email_address,
      },
      user_type: E_UserType.USER,
    };

    return response;
  }

  private async generateUserAccessToken(userUid: string): Promise<string> {
    const data = {
      user_uid: userUid,
      expires_in_minutes: 3600,
      access_token: this.uidService.generateUuid(),
    };

    const userAccessToken = await this.userAccessTokenRepository.create(data);

    return userAccessToken.access_token;
  }
}
