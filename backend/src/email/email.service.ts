import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { Email } from './interfaces/email.interface';

@Injectable()
export class EmailService {
  private emails: Email[] = [
    { 
      id: '1', 
      from: 'john@example.com', 
      to: 'jane@example.com', 
      subject: 'Hello', 
      body: 'How are you? I hope this email finds you well. I wanted to check in and see how things are going.', 
      timestamp: '2023-08-03T10:00:00Z' 
    },
    { 
      id: '2', 
      from: 'jane@example.com', 
      to: 'john@example.com', 
      subject: 'Re: Hello', 
      body: 'Hi John, thanks for checking in! Things are going well here. How about you?', 
      timestamp: '2023-08-03T11:00:00Z' 
    },
    { 
      id: '3', 
      from: 'alice@example.com', 
      to: 'bob@example.com', 
      subject: 'Meeting tomorrow', 
      body: 'Dont forget about our team meeting tomorrow at 2 PM. See you there!', 
      timestamp: '2023-08-03T12:00:00Z' 
    }
  ];

  async findAll(): Promise<Email[]> {
    return this.emails;
  }



  async findOne(id: string): Promise<Email | undefined> {
    return this.emails.find(email => email.id === id);
  }

  async create(createEmailDto: CreateEmailDto): Promise<Email> {
    const newEmail: Email = {
      id: Date.now().toString(),
      ...createEmailDto,
      timestamp: new Date().toISOString()
    };
    this.emails.push(newEmail);
    return newEmail;
  }

  async reply(id: string, replyDto: CreateEmailDto): Promise<Email> {
    const originalEmail = await this.findOne(id);
    if (!originalEmail) {
      throw new Error('Email not found');
    }

    const replyEmail: Email = {
      id: Date.now().toString(),
      from: replyDto.from,
      to: originalEmail.from,
      subject: `Re: ${originalEmail.subject}`,
      body: replyDto.body,
      timestamp: new Date().toISOString()
    };

    this.emails.push(replyEmail);
    return replyEmail;
  }
}