import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // In NestJS, pipes are used to transform or validate data before it reaches your route handlers (controllers).
  // useGlobalPipes() sets a pipe that runs globally for every incoming request, not just for specific routes.
  // ValidationPipe integrates with the class-validator library and validates incoming data against the rules defined in your DTO (Data Transfer Object) classes.
  // For example, see the DTO defined in: apps/backend/src/user/dto/create-user.input.ts
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
