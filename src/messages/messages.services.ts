import { MessagesRepository } from './messages.repository';

export class MessagesService {
  constructor() {
    this.messagesRepo = new MessagesRepository();
  }

  messagesRepo: MessagesRepository;

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(sender: string, content: string) {
    return this.messagesRepo.create(sender, content);
  }
}
