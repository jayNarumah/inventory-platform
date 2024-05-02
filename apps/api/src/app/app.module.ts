import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilModule } from './util/util.module';
import { DomainModule } from '../domain/domain.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UtilModule,
    DomainModule,
    ApiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
