import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://m2a.jaipasraisonla.team',
    ],
    methods: ["GET", "POST"],
    credentials: true,
  });
  await app.listen(80);
}
bootstrap();
