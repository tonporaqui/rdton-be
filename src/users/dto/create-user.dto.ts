import { UserStatus } from "../interfaces/user.interface";
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  first_name?: string;
  last_name?: string;

  @IsString()
  @IsNotEmpty()
  @IsIn([UserStatus.CREATE, UserStatus.UPDATE, UserStatus.DISABLE])
  status: UserStatus;
  date_create?: string;
  password: string;
}

export class UpdateUserDto {
  id?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  status?: UserStatus;
  date_create?: string;
  password?: string;
}
