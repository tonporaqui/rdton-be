import { Injectable } from "@nestjs/common";
import { User } from "src/users/interfaces/user.interface";

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  createUser(user: User) {
    this.users.push(user);
    if (Array.isArray(this.users) && !this.users.length)
      return "Ocurrio un error";
    else return user;
  }
  getAllUsers(): User[] {
    return this.users;
  }
}
