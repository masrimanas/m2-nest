import { Controller, Get, Module, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { rootCertificates } from 'tls';
import { isGeneratorObject } from 'util/types';
import { MessagesController } from './messages/messages.controller';
import { MessagesModule } from './messages/messages.module';
import { MessagesRepository } from './messages/messages.repository';
import { MessagesService } from './messages/messages.services';

@Controller()
export class MainController {
  @Get()
  getRoot() {
    return { message: 'This is root' };
  }
}

@Module({
  controllers: [MainController, MessagesController],
  providers: [MessagesService, MessagesRepository],
})
export class MainModule {}

async function bootstrap() {
  const app = await NestFactory.create({
    module: MainModule,
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
