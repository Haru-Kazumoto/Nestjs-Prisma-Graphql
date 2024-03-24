import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({transform: true}));

  await app.listen(3000);
 Logger.log("Playground is available at http://localhost:3000/graphql", "GraphQL");
}
bootstrap();
