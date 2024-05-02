import { Injectable } from "@nestjs/common";
import { Prisma, UserAccessToken } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { CreateUserAccessTokenDto, UpdateUserAccessTokenDto } from "libs/api-interfaces/src/lib/dtos/user";
@Injectable()
export class UserAccessTokenRepository {
  private LOG_NAME = "[UserAccessTokenRepository]";

  constructor(private readonly prisma: PrismaService) { }

  async list(args: Prisma.UserAccessTokenFindManyArgs = {}): Promise<UserAccessToken[]> {
    try {
      return this.prisma.userAccessToken.findMany(args);
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to fetch a list of user access tokens!`);
      console.log(err);
    }
  }

  async findByUid(uid: string): Promise<UserAccessToken | null> {
    try {
      const UserAccessToken = await this.prisma.userAccessToken.findFirst({
        where: { uid: uid },
      });
      if (!UserAccessToken) return null;

      return UserAccessToken;
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to find a user access token login token entry!`);
      console.log(err);

      return null;
    }
  }

  async findByUserUid(user_uid: string): Promise<UserAccessToken | null> {
    try {
      const UserAccessToken = await this.prisma.userAccessToken.findFirst({
        where: { user_uid: user_uid },
      });
      if (!UserAccessToken) return null;

      return UserAccessToken;
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to find a user access token login token entry!`);
      console.log(err);

      return null;
    }
  }

  async findByAccessToken(accessToken: string): Promise<UserAccessToken | null> {
    try {
      const UserAccessToken = await this.prisma.userAccessToken.findFirst({
        where: { access_token: accessToken },
      });
      if (!UserAccessToken) return null;

      return UserAccessToken;
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to find a user access token login token entry!`);
      console.log(err);

      return null;
    }
  }

  async create(data: CreateUserAccessTokenDto): Promise<UserAccessToken | null> {
    try {
      const userAccessToken = await this.prisma.userAccessToken.create({
        data: data,
      })

      return userAccessToken;
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to create a user access token login token entry!`);
      console.log(err);

      return null;
    }
  }

  async update(id: number, data: UpdateUserAccessTokenDto): Promise<boolean> {
    try {
      await this.prisma.userAccessToken.update({
        where: { id: id },
        data: data,
      });

      return true;
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to update a user!`);
      console.log(err);

      return false;
    }
  }

  async delete(uid: string): Promise<boolean> {
    try {
      await this.prisma.userAccessToken.delete({
        where: { uid: uid },
      });

      return true;
    } catch (err) {
      console.log(`${this.LOG_NAME} An error occurred while attempting to delete a user!`);
      console.log(err);

      return false;
    }
  }
}
