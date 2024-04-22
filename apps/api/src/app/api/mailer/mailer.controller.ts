import { Body, Controller, Get, Post } from '@nestjs/common';

import { MailService } from './mailer.service';
import { SendDefaultMailDto, SendMailDto, SendProcurementMailDto, SendVerificationMailDto } from '@inventory-platform/api-interfaces';

@Controller('/mailer')
export class MailController {
  constructor(private readonly mailService: MailService) { }

  @Get()
  getData() {
    return this.mailService.getData();
  }

  @Post('/send-mail')
  sendMail(@Body() payload: SendMailDto) {
    return this.mailService.sendMail(payload);
  }

  @Post('/send-verification-mail')
  sendVerificationMail(@Body() payload: SendVerificationMailDto) {
    return this.mailService.sendVerificationMail(payload);
  }

}
