// src/email/dto/create-email.dto.ts
export class CreateEmailDto {
    from: string;
    to: string;
    subject: string;
    body: string;
  }