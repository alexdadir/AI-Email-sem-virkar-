"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
let EmailService = class EmailService {
    constructor() {
        this.emails = [
            { id: '1', from: 'john@example.com', to: 'jane@example.com', subject: 'Hello', body: 'How are you?', timestamp: '2023-08-03T10:00:00Z' },
        ];
    }
    async findAll() {
        return this.emails;
    }
    async findOne(id) {
        return this.emails.find(email => email.id === id);
    }
    async create(createEmailDto) {
        const newEmail = Object.assign(Object.assign({ id: Date.now().toString() }, createEmailDto), { timestamp: new Date().toISOString() });
        this.emails.push(newEmail);
        return newEmail;
    }
};
EmailService = __decorate([
    (0, common_1.Injectable)()
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map