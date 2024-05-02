import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
// import { ConfigModule } from '@nestjs/config';
// import { MailModule } from '../mailer/mailer.module';
@Module({
  controllers: [UserController],
  imports: [],
  providers: [UserService],
})
export class UserModule { }
