import { UserStatus } from '../interfaces/user.interface'
import {
	IsDateString,
	IsIn,
	IsNotEmpty,
	IsOptional,
	IsString,
	MinLength,
} from 'class-validator'

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	id: string

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	name: string

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@IsOptional()
	first_name?: string

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@IsOptional()
	last_name?: string

	@IsString()
	@IsNotEmpty()
	@IsIn([UserStatus.CREATE, UserStatus.UPDATE, UserStatus.DISABLE])
	status: UserStatus

	@IsDateString()
	@IsNotEmpty()
	date_create?: string

	@IsString()
	@IsNotEmpty()
	@MinLength(9)
	password: string
}

export class UpdateUserDto {
	@IsString()
	@IsNotEmpty()
	id?: string

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	name?: string

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@IsOptional()
	first_name?: string

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@IsOptional()
	last_name?: string

	@IsString()
	@IsNotEmpty()
	@IsIn([UserStatus.CREATE, UserStatus.UPDATE, UserStatus.DISABLE])
	status?: UserStatus

	@IsDateString()
	@IsNotEmpty()
	date_create?: string

	@IsString()
	@IsNotEmpty()
	@MinLength(9)
	password?: string
}
