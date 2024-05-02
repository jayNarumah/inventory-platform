import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from '../../database/repositories/user.repository';
import { UserAccessTokenRepository } from '../../database/repositories/user-access-token.respository';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userAccessTokenRepository: UserAccessTokenRepository,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const http = context.switchToHttp();
    const request = http.getRequest<Request>();
    const authorizationHeader = request.headers['authorization'] ?? '';
    const bearerToken = authorizationHeader.split(' ')[1];
    if (!bearerToken) {
      throw new UnauthorizedException('Invalid Access Token!');
    }

    const userAccessToken = await this.userAccessTokenRepository.findByAccessToken(bearerToken);
    if (!userAccessToken) {
      throw new UnauthorizedException('Invalid Access Token!');
    }

    const user = await this.userRepository.findByUid(userAccessToken.user_uid);
    if (!user) {
      throw new UnauthorizedException('Invalid User Account!');
    }

    request['user'] = user;

    return true;
  }
}
