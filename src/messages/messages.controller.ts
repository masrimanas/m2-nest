import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.services';

@Controller('messages')
export class MessagesController {
  constructor() {
    this.messageService = new MessagesService();
  }
  messageService: MessagesService;

  @Get()
  getAllMessages() {
    return this.messageService.findAll();
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.sender, body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
