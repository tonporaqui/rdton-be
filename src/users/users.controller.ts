import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiOperation,
	ApiResponse,
	ApiTags,
} from '@nestjs/swagger'
import { v4 } from 'uuid'
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto'
import { User, UserStatus } from './interfaces/user.interface'
import { UsersService } from './users.service'

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(private userServices: UsersService) {}

	@Post()
	@ApiOperation({ summary: 'Create User' })
	@ApiResponse({ status: 403, description: 'Forbidden.' })
	async createUser(@Body() createUserDto: CreateUserDto) {
		createUserDto.id = v4()
		createUserDto.date_create = new Date().toISOString()
		createUserDto.status = UserStatus.CREATE
		const item = this.userServices.createUser(createUserDto)
		return item
	}

	@Get()
	@ApiResponse({
		status: 200,
		description: 'Return all User',
		type: Array,
	})
	async getAll(): Promise<User[]> {
		return this.userServices.getAllUsers()
	}

	@Get(':id')
	@ApiResponse({
		status: 200,
		description: 'Return User found',
		type: Array,
	})
	async getUserID(@Param('id') id: string) {
		return this.userServices.getUserById(id)
	}

	@Delete(':id')
	async removeUser(@Param('id') id: string) {
		this.userServices.deleteUser(id)
	}

	@Patch(':id')
	async updateUsers(
		@Param(':id') id: string,
		@Body() updatedFileds: UpdateUserDto,
	) {
		return this.userServices.updatedUsers(id, updatedFileds)
	}

	@Delete()
	@ApiResponse({
		status: 200,
		description: 'Delete all User',
		type: Array,
	})
	async deleteAll() {
		return this.userServices.deleteAllUsers()
	}
}
