// src/app.module.ts
import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';

@Module({
  imports: [EmailModule],
})
export class AppModule {}