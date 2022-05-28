"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const cat_entity_1 = require("./entities/cat.entity");
let CatsService = class CatsService {
    async create(createCatDto) {
        const rtn = await (0, typeorm_1.getConnection)()
            .createQueryBuilder()
            .insert()
            .into(cat_entity_1.Cat)
            .values(createCatDto)
            .execute();
        return rtn;
    }
    async findAll() {
        const rtn = await (0, typeorm_1.getConnection)()
            .createQueryBuilder()
            .select("cat")
            .from(cat_entity_1.Cat, "cat")
            .getMany();
        return rtn;
    }
    findOne(id) {
        return `This action returns a #${id} cat`;
    }
    update(id, updateCatDto) {
        return `This action updates a #${id} cat`;
    }
    remove(id) {
        return `This action removes a #${id} cat`;
    }
};
CatsService = __decorate([
    (0, common_1.Injectable)()
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.service.js.map