import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = new DocumentBuilder()
		.setTitle('Rincon del Ton')
		.setDescription('The Back-End web RDT')
		.setVersion('1.0')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('docs', app, document)
	app.useGlobalPipes(new ValidationPipe())
	app.enableCors({
		origin: [
			'http://localhost:3000',
			'http://localhost:3000/users',
			'https://rdton-fe.vercel.app/client-api',
			'https://rdton-fe.vercel.app/',
		],
		methods: ['GET', 'POST', 'PATCH', 'DELETE'],
	})

	await app.listen(3001)
}
bootstrap()
