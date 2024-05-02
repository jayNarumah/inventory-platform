import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "@prisma/client";
import { CreateUserDto, UpdateUserDto } from "apps/api/src/domain/models/user";
import { MailRecipientDto, SendDefaultMailDto } from "@inventory-platform/api-interfaces";
import { UserRepository } from "../../../database/repositories/user.repository";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    // private readonly mail: MailService,
  ) { }

  async list(): Promise<User[]> {
    const users = await this.userRepository.list();

    return users;
  }

  async findByUid(uid: string): Promise<User> {
    const user = await this.userRepository.findByUid(uid);


    if (!user) {
      throw new NotFoundException('The user specified was not found!');
    }

    return user;
  }

  async create(payload: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(payload.email_address);

    if (existingUser) {
      throw new ConflictException(`A user with the specified login email: ${payload.email_address} already exists!`);
    }

    const user = await this.userRepository.create(payload);

    // const recipient: MailRecipientDto[] = [];
    // recipient.push({
    //   email_address: payload.email_address
    // });

    // const mail: SendDefaultMailDto = {
    //   name: `${user.full_name}`,
    //   subject: 'Account Creation',
    //   content: `Your Account has been Created successfully. Your login credentials are username: ${payload.email_address}, password: ${payload.password}.
    //         If you have any further questions or concerns, please don not hesitate to contact us`,
    //   recipients: recipient,
    //   url: `http://localhost:4250/auth/login`,
    //   tag: 'Sign In'
    // }

    // this.mail.sendDefaultMail(mail)
    //   .then(response => {
    //     console.log("Email sent successfully!");
    //     console.log(response);
    //   });

    return user;
  }

  async updateByUid(uid: string, payload: UpdateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findByUid(uid);

    if (!existingUser) {
      throw new NotFoundException(`The user with the uid: ${uid} was not found`);
    }

    await this.userRepository.update(uid, payload);



    return await this.userRepository.findByUid(uid);
  }

  async deleteByUid(uid: string): Promise<void> {
    const user = await this.userRepository.findByUid(uid);
    if (!user) {
      throw new NotFoundException('The user specified was not found!');
    }

    await this.userRepository.delete(uid);
  }

  randomPassword() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const string_length = 8;
    let randomstring = '';
    for (let i = 0; i < string_length; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring
  }
}
