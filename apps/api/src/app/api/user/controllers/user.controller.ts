import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { AdminAuthGuard } from "../../auth/auth.guard";
import { CreateUserDto, UpdateUserDto } from "libs/api-interfaces/src/lib/dtos/user";

@UseGuards(AdminAuthGuard)
@Controller('/admin/user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/list')
  list() {
    return this.userService.list();
  }

  @Get('/find/uid/:uid')
  findOneByUid(@Param('uid') uid: string) {
    return this.userService.findByUid(uid);
  }

  @Post('/create')
  create(@Body() payload: CreateUserDto) {
    return this.userService.create(payload);
  }

  @Patch('/update/:uid')
  update(@Param('uid') uid: string, @Body() payload: UpdateUserDto) {
    return this.userService.updateByUid(uid, payload);
  }

  @Delete('/delete/:uid')
  delete(@Param('uid') uid: string) {
    return this.userService.deleteByUid(uid);
  }
}
