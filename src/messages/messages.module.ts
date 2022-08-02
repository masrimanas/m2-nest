import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.services';

@Module({
  controllers: [MessagesController],
})
export class MessagesModule {}
