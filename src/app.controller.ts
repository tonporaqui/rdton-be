import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
	@Get()
	getHello() {
		return 'Nest.js API Rincon del Ton!'
	}
}
