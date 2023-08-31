import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserStatus } from "./interfaces/user.interface";
import { v4 } from "uuid";

@Controller("users")
export class UsersController {
  constructor(private userServices: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    createUserDto.id = v4();
    createUserDto.date_create = new Date().toISOString();
    createUserDto.status = UserStatus.CREATE;
    const item = this.userServices.createUser(createUserDto);
    return item;
  }

  @Get()
  async getAll(): Promise<User[]> {
    return this.userServices.getAllUsers();
  }
}
