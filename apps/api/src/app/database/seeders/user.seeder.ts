import { Injectable } from '@nestjs/common';
import { AbstractSeeder } from './seeder';
import { PrismaService } from '../prisma.service';
import { UidService } from '../../util/uid/uid.service';
import { BcryptService } from '../../util/bcrypt/bcrypt.service';

@Injectable()
export class UserSeeder implements AbstractSeeder {
  constructor(
    private readonly prisma: PrismaService,
    private readonly uidService: UidService,
    private readonly bcryptService: BcryptService,
  ) { }

  async run(): Promise<void> {
    console.log('Running UserSeeder...');
    await this._loadData();
    console.log('Completed UserSeeder...');
  }

  async _loadData() {
    const userCount = await this.prisma.user.count({});
    if (userCount > 0) return;

    const hashedPassword = await this.bcryptService.hashPassword('super@321');
    const sudoAdmin = await this.prisma.user.createMany({
      data: [
        {
          uid: this.uidService.generateUuid(),
          full_name: 'Super Admin',
          email_address: 'super@admin.mail.ng',
          password: hashedPassword,
          gender: 'Male',
          dob: new Date(),
        },
        {
          uid: this.uidService.generateUuid(),
          full_name: 'Admin User',
          email_address: 'ahmad@admin.mail.ng',
          password: hashedPassword,
          gender: 'Male',
          dob: new Date(),
        },
      ],
    });
  }
}
