import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { Email } from './interfaces/email.interface';

@Controller('emails')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  findAll(): Promise<Email[]> {
    return this.emailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Email | undefined> {
    return this.emailService.findOne(id);
  }

  @Post()
  create(@Body() createEmailDto: CreateEmailDto): Promise<Email> {
    return this.emailService.create(createEmailDto);
  }

  @Post(':id/reply')
  reply(@Param('id') id: string, @Body() replyDto: CreateEmailDto): Promise<Email> {
    return this.emailService.reply(id, replyDto);
  }
}