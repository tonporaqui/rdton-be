import { ApiProperty } from '@nestjs/swagger'
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
	@ApiProperty({
		description: 'identificador de usuario',
		type: 'uuid v4',
	})
	@IsString()
	@IsNotEmpty()
	id: string

	@ApiProperty({
		description: 'Name user',
		type: 'string',
		minimum: 4,
	})
	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	name: string

	@ApiProperty({
		description: 'firts name user',
		type: 'string',
		minimum: 4,
	})
	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@IsOptional()
	first_name?: string

	@ApiProperty({
		description: 'last name user',
		type: 'string',
		minimum: 4,
	})
	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@IsOptional()
	last_name?: string

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@IsIn([UserStatus.CREATE, UserStatus.UPDATE, UserStatus.DISABLE])
	status: UserStatus

	@ApiProperty({
		description: 'date create user',
		type: 'Date String',
	})
	@IsDateString()
	@IsNotEmpty()
	date_create?: string

	@ApiProperty({
		description: 'password user',
		type: 'string',
		minimum: 9,
	})
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@MinLength(9)
	password: string
}

export class UpdateUserDto {
	@ApiProperty({
		description: 'identificador de usuario',
		type: 'uuid v4',
	})
	@IsString()
	@IsNotEmpty()
	id?: string

	@ApiProperty({
		description: 'Name user',
		type: 'string',
		minimum: 4,
	})
	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	name?: string

	@ApiProperty({
		description: 'firts name user',
		type: 'string',
		minimum: 4,
	})
	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@IsOptional()
	first_name?: string

	@ApiProperty({
		description: 'last name user',
		type: 'string',
		minimum: 4,
	})
	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@IsOptional()
	last_name?: string

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@IsIn([UserStatus.CREATE, UserStatus.UPDATE, UserStatus.DISABLE])
	status?: UserStatus

	@ApiProperty({
		description: 'date create user',
		type: 'Date String',
	})
	@IsDateString()
	@IsNotEmpty()
	date_create?: string

	@ApiProperty({
		description: 'password user',
		type: 'string',
		minimum: 9,
	})
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@MinLength(9)
	password?: string
}
