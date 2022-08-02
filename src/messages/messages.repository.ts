import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);

    return messages;
  }

  async create(sender: string, content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, sender, content };

    await writeFile('messages.json', JSON.stringify(messages));

    return { status: 'sent', messageBody: messages[id] };
  }
}
