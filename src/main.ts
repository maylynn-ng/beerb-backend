import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SETUP } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(SETUP.port);
}
bootstrap();
