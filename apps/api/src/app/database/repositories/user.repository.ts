import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto, UpdateUserDto } from 'libs/api-interfaces/src/lib/dtos/user';

@Injectable()
export class UserRepository {
  private LOG_NAME = "[UserRepository]";

  constructor(private prisma: PrismaService) { }

  async list(args: Prisma.UserFindManyArgs = {}): Promise<User[]> {
    try {
      return this.prisma.user.findMany(args);
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to fetch a list of users!`);
      console.log(err);
    }
    return this.prisma.user.findMany(args);
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const user = this.prisma.user.findUnique({
        where: { email_address: email },
      });
      if (!user) return null;

      return user;
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to find a user!`);
      console.log(err);

      return null;
    }
  }

  async findByUid(uid: string): Promise<User> {
    try {
      const user = this.prisma.user.findUnique({
        where: { uid: uid },
      });
      if (!user) return null;

      return user;
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to find a user!`);
      console.log(err);

      return null;
    }
  }

  async create(data: CreateUserDto): Promise<User> {
    try {
      const user = await this.prisma.user.create({
        data: {
          full_name: data.full_name,
          email_address: data.email_address,
          password: data.password,
          gender: data.gender,
          dob: data.dob,
        },
      });

      return user;
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to create a user access token login token entry!`);
      console.log(err);

      return null;
    }

  }

  async update(uid: string, data: UpdateUserDto): Promise<User> {
    try {
      const user = await this.prisma.user.update({
        where: { uid: uid },
        data: data,
      });

      return user;
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to update a tenant user!`);
      console.log(err);

      return null;
    }
  }

  async delete(uid: string): Promise<boolean> {
    try {
      await this.prisma.user.delete({
        where: { uid: uid },
      });

      return true;
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to delete a user access token login token entry!`);
      console.log(err);

      return false;
    }
  }
}
