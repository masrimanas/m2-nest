import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  sender: string;
  @IsString()
  content: string;
}
