"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_subscriber_1 = require("./subscribers/user.subscriber");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const user_controller_1 = require("./controllers/user.controller");
const user_service_1 = require("./services/user.service");
const SERVICES = [
    user_service_1.UserService
];
const SUBSCRIBERS = [
    user_subscriber_1.UserSubscriber
];
const CONTROLLERS = [
    user_controller_1.UserController
];
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        providers: [
            ...SERVICES,
            ...SUBSCRIBERS
        ],
        controllers: [...CONTROLLERS],
        exports: [
            ...SERVICES
        ]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map