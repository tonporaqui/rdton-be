import { Injectable } from "@nestjs/common";
import { User } from "src/users/interfaces/user.interface";
import { UpdateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  private users: User[] = [];

  createUser(user: User) {
    this.users.push(user);
    if (Array.isArray(this.users) && !this.users.length)
      return "Ocurrio un error";
    else return user;
  }

  getUserById(id: string) {
    return this.users.find((users) => users.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  deleteUser(id: string) {
    this.users = this.users.filter((users) => users.id !== id);
  }

  updatedUsers(id: string, updatedFields: UpdateUserDto): User {
    const user = this.getUserById(id);
    const newUser = Object.assign(user, updatedFields);
    this.users.map((user) => (user.id === id ? newUser : user));
    return newUser;
  }
}
