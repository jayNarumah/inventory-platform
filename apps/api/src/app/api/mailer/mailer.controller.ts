import { SendDefaultMailDto, SendMailDto, SendProcurementMailDto, SendVerificationMailDto } from '@monita-platform/api-interfaces';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { MailService } from './mailer.service';

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

  @Post('/send-procurement-mail')
  sendProcurementMail(@Body() payload: SendProcurementMailDto) {
    return this.mailService.sendProcurementMail(payload);
  }
  
  @Post('/send-default-mail')
  sendDefaultMail(@Body() payload: SendDefaultMailDto) {
    return this.mailService.sendDefaultMail(payload);
  }
}