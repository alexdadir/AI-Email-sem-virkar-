import { CreateEmailDto } from './dto/create-email.dto';
import { Email } from './interfaces/email.interface';
export declare class EmailService {
    private emails;
    findAll(): Promise<Email[]>;
    findOne(id: string): Promise<Email | undefined>;
    create(createEmailDto: CreateEmailDto): Promise<Email>;
}
