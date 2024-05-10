import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminAuthGuard } from './auth.guard';
import { AuthLoginRequestDto } from '@inventory-platform/api-interfaces';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/login')
  login(@Body() body: AuthLoginRequestDto) {
    return this.authService.login(body);
  }

  @UseGuards(AdminAuthGuard)
  @Get('/check-auth')
  profile() {
    return {
      profile: true,
    };
  }
}
