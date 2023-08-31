import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./interfaces/user.interface";

@Controller("users")
export class UsersController {
  constructor(private userServices: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    createUserDto.id = "1";
    createUserDto.date_create = new Date().toISOString();
    if (this.userServices.createUser(createUserDto) === 1)
      return "usuario creado con exito";
    else return "upsi error !! no se pudo crear el usuario";
  }

  @Get()
  async getAll(): Promise<User[]> {
    return this.userServices.getAllUsers();
  }
}
