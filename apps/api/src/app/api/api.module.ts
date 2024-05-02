import { Module } from "@nestjs/common";

import { MailModule } from './mailer/mailer.module';
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    UserModule
  ],
})
export class ApiModule { }
