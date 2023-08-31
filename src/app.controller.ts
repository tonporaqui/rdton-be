import { Controller, Get } from '@nestjs/common'
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger'

@ApiBasicAuth()
@ApiTags('raiz')
@Controller()
export class AppController {
	@Get()
	getHello() {
		return 'Nest.js API Rincon del Ton!'
	}
}
