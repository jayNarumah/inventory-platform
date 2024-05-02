import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DatabaseFactoryService } from './database-factory.service';
import { UserAccessTokenRepository } from './repositories/user-access-token.respository';
import { UserRepository } from './repositories/user.repository';
import { UserSeeder } from './seeders/user.seeder';

const repositories = [
  UserAccessTokenRepository,
  UserRepository,
];
const seeders = [UserSeeder];

@Global()
@Module({
  providers: [
    PrismaService,
    DatabaseFactoryService,
    ...repositories,
    ...seeders,
  ],
  exports: [PrismaService, ...repositories],
})
export class PrismaModule { }
