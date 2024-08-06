import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { Email } from './interfaces/email.interface';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    findAll(): Promise<Email[]>;
    findOne(id: string): Promise<Email | undefined>;
    create(createEmailDto: CreateEmailDto): Promise<Email>;
}
