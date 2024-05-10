import { Module } from "@nestjs/common";

import { MailModule } from './mailer/mailer.module';
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    AuthModule,
    UserModule
  ],
})
export class ApiModule { }
