import { Injectable } from "@nestjs/common";
import { User } from "src/users/interfaces/user.interface";

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  createUser(user: User) {
    return this.users.push(user);
  }
  getAllUsers(): User[] {
    return this.users;
  }
}
